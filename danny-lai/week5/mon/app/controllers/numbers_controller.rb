class NumbersController < ApplicationController

  def form
  end

  def result
    @user_input = params[:number].to_i
    @computer_number = rand 1..10
    # @result = ''

    if @user_input == @computer_number
      @result = "Correct guess!"
    else
      @result = "Incorrect guess!"
    end

  end

end
