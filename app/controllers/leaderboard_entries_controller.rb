class LeaderboardEntriesController < ApplicationController
  before_action :find_leaderboard_entry, only: [:show, :update]


  def index
    render json: LeaderboardEntry.all, status: :ok
  end

  def create
    leaderboard_entry = LeaderboardEntry.create!(leaderboard_entry_params)
    render json: leaderboard_entry, status: :created
  end

  def update
    @leaderboard_entry.update!(leaderboard_entry_params)
    render json: @leaderboard_entry, status: :accepted
  end

  private

 def leaderboard_entry_params
   params.permit(:high_score, :cumulative_score, :user_id)
 end

 def find_leaderboard_entry
   @leaderboard_entry = LeaderboardEntry.find(params[:id])
 end

end
