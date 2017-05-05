require 'rails_helper'

RSpec.describe Api::ProgramsController, type: :controller do
  let(:user) { User.create!( username: "Tim", password: "password" ) }
  before { allow(controller).to receive(:current_user) { user } }
  let(:program) do
    Program.create!(
      name: "testow",
      creator: "Tim",
      description: "It's cool",
      author_id: user.id
    )
  end

  render_views

  describe "#show" do
    it "renders the program to json" do
      get :show, format: :json, params: { id: program.id }

      expect(response).to render_template(:show)
      expect(response).to have_http_status(200)
    end
  end

  describe "#create" do
    it "renders a program when given correct params" do
      post :create, format: :json, params: {
        program: {
          name: "test",
          creator: "Tim",
          description: "It's cool!"
        }
      }

      expect(response).to render_template(:show)
      expect(response).to have_http_status(200)
    end

    it "renders errors when given incorrect params" do
      post :create, format: :json, params: {
        program: { name: "test" }
      }

      expect(response).to have_http_status(422)
    end
  end

  describe "#search" do
    it "returns no programs for a blank search" do
      get :search, format: :json, params: { query: "" }

      expect(JSON.parse(response.body)[:programCount]).to be_nil
      expect(response).to have_http_status(200)
    end

    it "returns non-empty results for a program name that's in the database" do
      get :search, format: :json, params: { query: "testow" }

      expect(response).to render_template(:index)
      expect(response).to have_http_status(200)
    end
  end
end
