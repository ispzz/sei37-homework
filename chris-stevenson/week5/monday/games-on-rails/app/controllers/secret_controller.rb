class SecretController < ApplicationController
  def guess
  end
  def result
    @secret_num = rand(10)
    @user_guess = params['user_guess']
    if @secret_num.to_i == @user_guess.to_i
      @outcome = 'You win!'
    else
      @outcome = 'You Lose!'
    end
  end
end
