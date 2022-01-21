# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🏕 Seeding leaderboard entries..."
LeaderboardEntry1 = LeaderboardEntry.create(high_score: 5, cumulative_score: rand(1..50), user_id: 12)
LeaderboardEntry2 = LeaderboardEntry.create(high_score: 5, cumulative_score: rand(1..50), user_id: 31)
LeaderboardEntry3 = LeaderboardEntry.create(high_score: 5, cumulative_score: rand(1..50), user_id: 2)
LeaderboardEntry4 = LeaderboardEntry.create(high_score: 6, cumulative_score: rand(1..50), user_id: 4)
LeaderboardEntry5 = LeaderboardEntry.create(high_score: 6, cumulative_score: rand(1..50), user_id: 7)
LeaderboardEntry6 = LeaderboardEntry.create(high_score: 7, cumulative_score: rand(1..50), user_id: 9)
LeaderboardEntry7 = LeaderboardEntry.create(high_score: 4, cumulative_score: rand(1..50), user_id: 10)
LeaderboardEntry8 = LeaderboardEntry.create(high_score: 9, cumulative_score: rand(1..50), user_id: 19)
