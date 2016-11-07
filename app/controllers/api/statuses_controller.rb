class Api::StatusesController < ApplicationController
  def show
    @status.find(params[:id])
  end

  def create

  end

  def destroy

  end

  private

  def status_params
    params.require(:status).permit(:program_id, content)
  end
end
