require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "users#create" do
    it "renders a user when given correct params" do
      post :create, format: :json, params: {
        user: { username: "test", password: "password" }
      }

      expect(response).to render_template(:show)
      expect(response).to have_http_status(200)
    end

    it "renders errors when given incorrect params" do
      post :create, format: :json, params: {
        user: { password: "password" }
      }

      expect(response).to have_http_status(422)
    end
  end
end
