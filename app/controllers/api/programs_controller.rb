class Api::ProgramsController < ApplicationController
  before_action :restrict_to_owner, only: [:update, :destroy]

  def index
    if params[:current_user] && current_user
      @programs = current_user.authored_programs
    else
      @programs = Program.all
    end
  end

  def show
    @program = Program.find(params[:id])
  end

  def create
    @program = Program.new(program_params)
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
    if @program && current_user.id == params[:id]
      @program.destroy
      render json: @program
    else
      render json: ["You do not have permission to delete that program"], status: 404
    end
  end

  private

  def restrict_to_owner
    unless current_user.id = params[:program][:author_id]
      render json: ["You do not have prermission to modify that program"], status: 404
    end
  end

  def program_params
    prams.require(:program).permit(:name,
                                   :creator,
                                   :source_code_url,
                                   :image_url,
                                   :description,)
  end
end

