class SecretnumberController < ApplicationController

 def secret_result
  @user_number = params[:guess].to_i
  @comp_number = Random.rand(1..10)

  until @user_number == @comp_number
    @user_number
  end

 end

end
