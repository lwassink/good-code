class Api::ReviewsController < ApplicationController
  before_action :restrict_to_owner, only: [:update, :destroy]

  def index
    program = Program.find(params[:program_id])
    @reviews = program.reviews
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id
    if @review.valid?
      @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    Review.find(params[:id]).destroy
    render json: {}
  end

  private

  def restrict_to_owner
    unless current_user == Review.find(params[:id]).user
      render json: ["You do not have prermission to modify that review"], status: 404
    end
  end

  def review_params
    params.require(:review).permit(:program_id, :body, :project_used_in)
  end
end

