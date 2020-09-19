Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE ####################################

    # 1. New Blank Form

      get '/dogs/new' => 'dogs#new'

    # 2. Form submits to here, AR create, redirect

      post '/dogs' => 'dogs#create'

    # READ #######################################

    # 1. Index page, i.e. list every row of the 'planets' tables

      get '/dogs' => 'dogs#index'

    # 2. Show page, i.e. details about one row (one planet) by ID

      get '/dogs/:id' => 'dogs#show', as: 'dog'

    # UPDATE ######################################

    # 1. Pre-populated edit form (which also requires a find by ID)

      get '/dogs/:id/edit' => 'dogs#edit', as: 'dog_edit'

    # 2. Edit form submits to here, AR update, redirect

      post '/dogs/:id' => 'dogs#update'

    # DELETE #######################################

    # Find a row by id and delete

      get '/dogs/:id/destroy' => 'dogs#destroy', as: 'dog_destroy'

end # Rails.application.routes.draw
