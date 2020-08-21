Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #CRUD
  #Create

  get "/new" => 'characters#new'

  post "/" => 'characters#create'

  #Read

  get "/" => 'characters#index'

  get "/:id" => 'characters#show', as: 'char'

  #Update

  get "/:id/edit" => 'characters#edit'

  post '/:id' => 'characters#update'

  #Delete
get "/:id/delete" => 'characters#delete'

end
