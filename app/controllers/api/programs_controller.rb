class Api::ProgramsController < ApplicationController
  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      @programs = user.authored_programs
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

  def destroy
    program = Program.find(params[:id])
    if program && current_user.id == params[:id]
      program.destroy
      render json: {}
    else
      render json: ["You do not have permission to delete that program"], status: 404
    end
  end

  private

  def program_params
    prams.require(:program).permit(:name,
                                   :creator,
                                   :source_code_url,
                                   :image_url,
                                   :description,)
  end
end

