class CreateLeaderboardEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :leaderboard_entries do |t|
      t.integer :high_score
      t.integer :cumulative_score
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
