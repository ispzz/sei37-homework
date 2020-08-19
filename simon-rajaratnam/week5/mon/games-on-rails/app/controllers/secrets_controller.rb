
class SecretsController < ApplicationController

  def pick
  end

  def reveal
    @selection = params[:selection].to_i
    @computer = rand 1..10
    if @selection == @computer
      @result = "Congratulations!!! you guessed it!!!"
    else
      @result = "Sorry, that wasn't it.."
    end    
  end # reveal

end # SecretsController
