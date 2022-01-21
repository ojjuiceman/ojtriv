class LeaderboardEntrySerializer < ActiveModel::Serializer
  attributes :id, :high_score, :cumulative_score
  has_one :user
end
