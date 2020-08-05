Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Magic 8 ball
  get '/m8b' => 'games#m8b'

  get '/m8b/answer' => 'games#answer'

end
