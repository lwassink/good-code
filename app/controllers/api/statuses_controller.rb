class Api::StatusesController < ApplicationController
  def show
    @status = Status.find(params[:id])
  end

  def create
    @status = Status.new(status_params)
    @status.user_id = current_user.id
    if @status.valid?
      @status.save
      render :show
    else
      render json: @status.errors.full_messages
    end
  end

  def update
    @status = Status.find_by_program_id_and_user_id(params[:id], current_user.id)
    if @status.update(status_params)
      render :show
    else
      render @status.errors.full_messages
    end
  end

  def destroy
    if current_user
      current_user.statuses.find_by_program_id(params[:id]).destroy
    end
    render json: {}
  end

  private

  def status_params
    params.require(:status).permit(:program_id, :content)
  end
end
