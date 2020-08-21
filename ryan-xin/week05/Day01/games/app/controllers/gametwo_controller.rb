class GametwoController < ApplicationController

  def form
  end
  
  def result
    @number = params[:number].to_i
    @random_number = rand(1..10)

    @answer = case 
    when @number == @random_number 
      "Your guess is correct!"
    else 
      "Your guess is wrong!"
    end
    
  end
  

end