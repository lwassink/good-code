require 'rails_helper'

RSpec.describe Api::StatusesController, type: :controller do
  let(:user) { User.create!( username: "Tim", password: "password" ) }

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

  let(:status) do
    Status.create!(
      program_id: program.id,
      content: 1,
      user_id: user.id
    )
  end

  before { allow(controller).to receive(:current_user) { user } }

  render_views

  describe "#show" do
    it "renders the show view" do
      get :show, format: :json, params: { id: status.id }

      expect(response).to render_template(:show)
    end

    it "returns with 200 status" do
      get :show, format: :json, params: { id: status.id }

      expect(response).to have_http_status(200)
    end
  end

  describe "#create" do
    context "with correct params" do
      it "creates a status" do
        post :create, format: :json, params: { status: {
          program_id: program.id,
          content: 2,
          user_id: user.id
        }}

        expect(response).to render_template(:show)
        expect(response).to have_http_status(200)
      end
    end

    context "with incorrect params" do
      it "returns error messages" do
        post :create, format: :json, params: { status: {
          program_id: program.id
        }}

        expect(response).to have_http_status(422)
      end
    end
  end
end
