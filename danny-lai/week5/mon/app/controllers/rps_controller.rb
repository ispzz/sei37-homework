class RpsController < ApplicationController

  def play

    user_throw = params[:throw]

    computer_choices = [
      'rock',
      'paper',
      'scissors'
    ]

    @computer_throw = computer_choices.sample

    # @result = ''

    if user_throw == @computer_throw
      @result = "You win!"
    else
      @result = "You lose!"
    end

  end

end
