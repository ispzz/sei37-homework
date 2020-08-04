Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root to: 'pages#information'
  #verb Path Controller # method
  get '/info' => 'pages#information'
  get '/funny' => 'pages#funny'

  get '/hello/:recipient' => 'pages#say_hello_to'

get '/calc' => 'calculator#home'

get '/calc/answer' => 'calculator#do_calculation'


end
