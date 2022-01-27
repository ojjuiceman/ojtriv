class User < ApplicationRecord
  has_secure_password

  has_many :attempts
  has_many :leaderboard_entries

  validates :username, presence: true
  validates :username, uniqueness: true


end
