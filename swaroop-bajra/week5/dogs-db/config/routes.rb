Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE ####################################

  # 1. New Blank Form

  # 2. Form submits to here, AR create, redirect

  # READ #######################################

  # 1. Index page, i.e. list every row of the 'planets' tables

    get '/dogs' => 'dogs#index'
    
  # 2. Show page, i.e. details about one row (one planet) by ID

  # UPDATE ######################################

  # 1. Pre-populated edit form (which also requires a find by ID)

  # 2. Edit form submits to here, AR update, redirect

  # DELETE #######################################

  # Find a row by id and delete


end
