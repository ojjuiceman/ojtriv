Rails.application.routes.draw do

  resources :leaderboard_entries, only:[:index, :create, :update]
  resources :attempts
  resources :users, only:[:index, :destroy]

  post "/Signup", to: "users#create"
  get "/me", to: "users#show"
  post "/Login", to: "sessions#create"
  delete "/Logout", to: "sessions#destroy"

  post "/Attempt", to: "attempts#create"
  get "/Average", to: "attempts#index"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
