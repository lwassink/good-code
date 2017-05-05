require 'rails_helper'

RSpec.describe Api::ReviewsController, type: :controller do
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

  let(:review) do
    Review.create!(
      program_id: program.id,
      body: "It's cool",
      project_used_in: "a project",
      author_id: user.id
    )
  end

  render_views

  describe "#index" do
    it "renders the index view" do
      get :index, format: :json, params: { program_id: program.id }

      expect(response).to render_template(:index)
    end

    it "returns with 200 status" do
      get :index, format: :json, params: { program_id: program.id }

      expect(response).to have_http_status(200)
    end
  end

  describe "#show" do
    it "renders the show view" do
      get :show, format: :json, params: { id: review.id }

      expect(response).to render_template(:show)
    end

    it "returns with 200 status" do
      get :show, format: :json, params: { id: review.id }

      expect(response).to have_http_status(200)
    end
  end

  describe "#create" do
    context "with correct params" do
      it "creates a program" do
        post :create, format: :json, params: { review: {
          program_id: program.id,
          body: "hi there",
          project_used_in: "Stuff"
        }}

        expect(response).to render_template(:show)
        expect(response).to have_http_status(200)
      end
    end

    context "with incorrect params" do
      it "returns error messages" do
        post :create, format: :json, params: { review: {
          program_id: program.id,
          project_used_in: "Stuff"
        }}

        expect(response).to have_http_status(422)
      end
    end
  end
end
