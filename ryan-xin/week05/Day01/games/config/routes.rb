Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # VERB PATH    CONTROLLER # METHOD ('action')
  root to: "home#home"

  # Magic 8 Ball
  get "/gameone" => "gameone#form"

  get "/gameone/answer" => "gameone#answer"

  # Secret Number
  get "/gametwo" => "gametwo#form"

  get "/gametwo/result" => "gametwo#result"

  # Rock Paper Scissor
  get "/gamethree" => "gamethree#form"

  # get "/gamethree/play" => "gamethree#play"

  get "/gamethree/:throw" => "gamethree#play"

end
