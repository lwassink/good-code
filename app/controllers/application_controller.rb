class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    User.find_by_session_token(session[:session_token])
  end

  helper_method :current_user
end
