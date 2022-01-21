class AttemptsController < ApplicationController

  def index
    attempts = Attempt.all
    render json: attempts, status: :ok
  end

  def create
    attempt = Attempt.create!(attempt_params)
    render json: attempt, status: :created
  end

  private

  def attempt_params
    params.permit(:score, :user_id)
  end

end
