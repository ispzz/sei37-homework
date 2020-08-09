Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # ----------------------------------- TEAM ----------------------------------- #

  # CREATE
  get "/teams/new" => "teams#new", as: "new_team"

  post "/teams" => "teams#create"


  # READ
  get "/teams" => "teams#index"

  get "/teams/:id" => "teams#show", as: "/team"


  # UPDATE
  get "/teams/:id/edit" => "teams#edit", as: "edit_team"
  
  patch "/teams/:id" => "teams#update"


  # DESTROY
  delete "/teams/:id" => "teams#destroy"


  # ---------------------------------- PLAYERS --------------------------------- #

  resources :players













end
