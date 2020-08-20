Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # CREATE ##############################################

  # 1. New (blank) form
  get '/languages/new' => 'languages#new' #helper will be 'languages_new_path'

  # 2. Form submits to here, AR create, redirect
  post '/languages' => 'languages#create' #helper will be languages_path

  # READ ################################################

  # 1. Show index page of all entries

  get '/languages' => 'languages#index' #must have same name as database name. 

  # 2. Show page - details about one row i.e. one planet

  get '/languages/:id' => 'languages#show', as: 'language' # gives us 'language_path' #must have same name as database name. 


  # UPDATE##############################################
  # 1. Pre-populated edit form (which also requires a find by ID)

  get '/languages/:id/edit' => 'languages#edit', as: 'language_edit'   #helper will be 

  # 2. Edit form submits to here, AR update, redirect

  post '/languages/:id' => 'languages#update'

  # DESTROY

  # 1. Find a row by ID and delete it.

  get '/languages/:id/destroy' => 'languages#destroy', as: 'language_destroy' #helper: planet_destroy_Path

end

