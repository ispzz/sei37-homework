Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => "pages#home"
get '/magic8ball' => 'magic8ball#home'
get '/magic8ball/result' => 'magic8ball#result'
get '/secretnumber' => 'secretnumber#home'
get '/secretnumber/result/:id' => 'secretnumber#result'
end
