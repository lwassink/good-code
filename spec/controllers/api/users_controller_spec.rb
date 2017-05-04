require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  describe "users#create" do
    it "renders a user with correct params" do
      post :create, user: { username: "test", password: "password" }

      # body = JSON.parse(response.body)
      # expect(body[:username]).to eq("test")
    end
  end
end
