Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE ---------------------------------------------------------------------

  # 1. New blank form
    get '/ducks/new' => 'ducks#new'

  # 2. Submit form to here, then redirect
    post '/ducks' => 'ducks#create'

  # READ -----------------------------------------------------------------------

  # 1. Index page, i.e. every row of the 'ducks' table
  get '/ducks' => 'ducks#index'

  # 2. Show page, i.e. details about one row (one planet) by id
  get '/ducks/:id' => 'ducks#show', as: 'duck'

  # UPDATE ---------------------------------------------------------------------

  # 1. Pre-populated edit form (which also requires a find by id)
    get '/ducks/:id/edit' => 'ducks#edit', as: 'duck_edit'

  # 2. Submit edit form here, redirect
    post '/ducks/:id' => 'ducks#update'

  # DESTROY --------------------------------------------------------------------
  # 1. Find row by id and delete it
    get '/ducks/:id/destroy' => 'ducks#destroy', as: 'duck_destroy'

end
