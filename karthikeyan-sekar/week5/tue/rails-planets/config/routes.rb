Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get '/planets/new' => 'planets#new'
post '/planets' => 'planets#create'
# 1.Index page, i.e. list every row of the Planet
get '/planets' => 'planets#index'
get '/planets/:id' => 'planets#show', as: 'planet' # gives us planet_path as the helper
get '/planets/:id/edit' => 'planets#edit', as: 'planet_edit' # gives us planet_path as the helper
post '/planets/:id' => 'planets#update'
get '/planets/:id/destroy' => 'planets#destroy', as: 'planet_destroy'
end
