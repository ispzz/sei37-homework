class PagesController < ApplicationController
#This is the action
# get '/info' => 'pages#information'
def information
end

def funny
  @title = 'Hillarious'
end

def say_hello_to
@hello_recipient = params[:recipient]
end
end
