Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    
  root to: 'home#index'

  # MAGIC8

  # 1. Blank form for entering question
  get '/magic' => 'magic#form'

  # 2. FOrm submits here

  # get '/magic/answer' => 'magic'

# 3. Match URL
  get '/magic/answer' => 'magic#do_answer'

  
end






