Rails.application.routes.draw do
  get 'companies/new' => 'companies#new', as: 'new_company'
  post '/companies' => 'companies#create'
  get 'companies' => 'companies#index'
  get 'companies/index'
  get 'companies/:id' => 'companies#show', as: 'company'
  get 'companies/edit'
  get 'companies/update'
  get 'companies/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
