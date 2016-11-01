class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    else
      @errors = ["Invalid login information"]
      render json: @errors, status: 404
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      @errors = ["No user logged in"]
      render json: @errors, status: 404
    end
  end
end
