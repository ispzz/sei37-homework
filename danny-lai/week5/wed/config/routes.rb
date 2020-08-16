Rails.application.routes.draw do

  # CREATE
  # 1. Blank form
  get '/teams/new' => 'teams#new', as: 'new_team'

  # 2. Form submit, create, redirect
  post '/teams/' => 'teams#create'

  #-----------------------------------------------------------------------------

  # READ
  # 1. Index of all teams
  get '/teams' => 'teams#index'

  # 2. Show page for a single team by id
  get 'teams/:id' => 'teams#show', as: 'team'

  #-----------------------------------------------------------------------------
  # UPDATE
  # 1. Pre-filled form for a specific team by id
  get '/teams/:id/edit' => 'teams#edit', as: 'edit_team'

  # 2. Form submit, update team, redirect to show
  patch '/teams/:id' => 'teams#update'

  #-----------------------------------------------------------------------------

  # DESTROY
  # 1. Destroy team by id, redirect to index
  delete '/teams/:id' => 'teams#destroy'

  #*****************************************************************************

  # CREATE
  # 1. Blank form
  get '/players/new' => 'players#new', as: 'new_player'

  # 2. Form submit, create, redirect
  post '/players/' => 'players#create'

  #-----------------------------------------------------------------------------

  # READ
  # 1. Index of all players
  get '/players' => 'players#index'

  # 2. Show page for a single player by id
  get 'players/:id' => 'players#show', as: 'player'

  #-----------------------------------------------------------------------------
  # UPDATE
  # 1. Pre-filled form for a specific player by id
  get '/players/:id/edit' => 'players#edit', as: 'edit_player'

  # 2. Form submit, update player, redirect to show
  patch '/players/:id' => 'players#update'

  #-----------------------------------------------------------------------------

  # DESTROY
  # 1. Destroy player by id, redirect to index
  delete '/players/:id' => 'players#destroy'

end
