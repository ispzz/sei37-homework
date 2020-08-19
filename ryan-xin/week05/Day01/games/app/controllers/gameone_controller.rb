class GameoneController < ApplicationController

  def form
  end
  
  def answer
    
    answer = [
      "As I see it, yes.",
      "It is decidedly so.",
      "It is certain.",
      " Yes – definitely.",
      "My reply is no.",
      "Very doubtful.",
      "Outlook not so good.",
      "My sources say no."
    ]

    @question = params[:question]
    @answer = answer[rand(0...8)]
        
  end
  
end
