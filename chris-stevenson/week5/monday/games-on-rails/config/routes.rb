Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #Landing Page to choose a game
  get '/' => 'landing#home'

  #Magic 8 Ball pages
  get '/magic' => 'magic#form'

  get '/magic/result' => 'magic#result'

  #Secret Number Game
  get '/secret' => 'secret#guess'

  get 'secret/result' => 'secret#result'

  #Rock paper scissors
  get '/rps' => 'rps#form'

  get '/rps/result' => 'rps#result'


end
