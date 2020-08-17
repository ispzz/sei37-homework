Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # CREATE
  get '/islands/new' => 'islands#new'

  post '/islands' => 'islands#create'
  # READ
  get '/islands' => 'islands#index'
  get '/islands/:id' => 'islands#show', as: 'island'
  # UPDATE
  get '/islands/:id/edit' => 'islands#edit', as: 'island_edit'
  post '/islands/:id' => 'islands#update'
  # DESTROY
  get '/islands/:id/destroy' => 'islands#destroy', as: 'island_destroy'
end
