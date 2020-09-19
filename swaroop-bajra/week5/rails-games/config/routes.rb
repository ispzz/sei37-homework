Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'games#information'
  get '/games' => 'games#information'

  get '/magiceightball/magic' => 'magiceightball#magic'

  get '/magiceightball/magic/:question' => 'magiceightball#result'

  get '/secretnumber/secret' => 'secretnumber#secret'

  get '/secretnumber/secret_result' => 'secretnumber#secret_result'


end
