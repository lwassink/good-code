class Api::ProgramsController < ApplicationController
  before_action :restrict_to_owner, only: [:update, :destroy]

  def index
    if params[:status] == '-1'
      @programs = Program.all
    elsif params[:current_user] && current_user
      @programs = current_user.authored_programs
    elsif params[:all_statuses] && current_user
      @programs = current_user.programs
    elsif current_user
      @programs = current_user.programs
        .joins(:statuses)
        .where(statuses: { content: params[:status] })
    end

    p @programs
  end

  def show
    @program = Program.find(params[:id])
  end

  def create
    @program = Program.new(program_params)
    @program.author_id = current_user.id
    if @program.valid?
      @program.save
      render :show
    else
      render json: @program.errors.full_messages, status: 422
    end
  end

  def update
    @program = Program.find(params[:program][:id])
    if @program.nil?
      render json: ['That program does not exist'], status: 404
    elsif @program.update(program_params)
      render :show
    else
      render json: @program.errors.full_messages, status: 422
    end
  end

  def destroy
    @program = Program.find(params[:id])
    if @program
      @program.destroy
      render json: @program
    end
  end

  private

  def restrict_to_owner
    unless current_user.id = Program.find(params[:id]).author
      render json: ["You do not have prermission to modify that program"], status: 404
    end
  end

  def program_params
    params.require(:program).permit(:name,
                                   :creator,
                                   :source_code_url,
                                   :image_url,
                                   :thumbnail_url,
                                   :description,)
  end
end

