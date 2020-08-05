Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  # Artists CRUD

  # CREATE
  # 1. Blank form
  get '/artists/new' => 'artists#new', as:'new_artist'

  # 3. Form submit, create, redirect to index
  post '/artists' => 'artists#create'   #path helper will be 'artists_path' , same as index

  # READ
  # 1. Index page - all artists
  get '/artists' => 'artists#index'

  # 2. Show page for a single artist by ID
  # "as : 'artist' tells rails to make the path helper method with the name 'artist_path'
  get '/artists/:id' => 'artists#show', as: 'artist' 

  # UPDATE
  # 1. Pre-filled form for a specific artist by ID
  get '/artists/:id/edit' => 'artists#edit', as: 'edit_artist'

  # 2. Form submit, update artist, redirect to show
  patch '/artists/:id' => 'artists#update'


  # DESTROY

  # destroy artist by ID, redirect to index
  delete '/artists/:id' => 'artists#destroy'


  # Work CRUD routes  
  resources :works


end 

