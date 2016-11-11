class Api::ProgramsController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  before_action :restrict_to_owner, only: [:update, :destroy]

  def index
    if params[:status] == '-1'
      programs = Program.all
    elsif params[:current_user] && current_user
      programs = current_user.authored_programs
    elsif current_user
      programs = current_user.programs
        .joins(:statuses)
        .where(statuses: { content: params[:status] })
    end

    @programs = programs
      .reverse_order
      .offset(params[:page].to_i * 10)
      .limit(10)

    @count = Program.all.count

    render :index
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

  def search
    query = params[:query].downcase
    query = query.split.join('%')
    query = "%#{query}%"

    if params[:query].present?
      @programs = Program.where(<<-SQL, query: query)
        LOWER(name) LIKE :query OR
        LOWER(creator) LIKE :query
      SQL
    else
      @programs = Program.none
    end

    render :index
  end

  private

  def restrict_to_owner
    unless current_user == Program.find(params[:id]).author
      render json: ["You do not have prermission to modify that program"], status: 401
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

