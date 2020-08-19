class SecretnumberController < ApplicationController
def home
end
def result
    secret_number = Random.rand (1..10)
    if secret_number == params[:id].to_i
      @message = 'Wow! You guessed the number!'
    else
      @message = "Better luck next time! The number was #{secret_number}"
    end
  end
end
