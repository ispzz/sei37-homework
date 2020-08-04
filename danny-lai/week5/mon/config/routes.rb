Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/questions' => 'questions#form'

  get '/questions/:input' => 'questions#answer'

  get '/numbers' => 'numbers#form'

  get '/numbers/result' => 'numbers#result'

  get '/games/rock_paper_scissors/:throw' => 'rps#play'

end
