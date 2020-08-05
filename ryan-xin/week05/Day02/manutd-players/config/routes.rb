Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE
  get "/players/new" => "players#new"

  post "/players" => "players#create"


  # READ
  get "/players" => "players#index"
 
  get "/players/:id" => "players#show", as: "player"


  # UPDATE
  get "/players/:id/edit" => "players#edit", as: "player_edit"

  post "/players/:id" => "players#update"


  # DELETE
  get "/players/:id/delete" => "players#delete", as: "player_delete"



end
