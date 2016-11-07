class Api::StatusesController < ApplicationController
  def show
    @status = Status.find(params[:id])
  end

  def create
    @status = Status.new(status_params)
    if @status.valid?
      @status.save
      render :show
    else
      render json: @status.errors.full_messages
    end
  end

  def update
    @status = Status.find(params[:id])
    if @status.update(status_params)
      render :show
    else
      render @status.errors.full_messages
    end
  end

  def destroy
    Status.find(params[:id]).destroy
    render json: {}
  end

  private

  def status_params
    params.require(:status).permit(:program_id, content)
  end
end
