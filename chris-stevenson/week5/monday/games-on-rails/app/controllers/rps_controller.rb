class RpsController < ApplicationController
  def form
  end
  def result
    user_move = params['user_move'].to_i
    cpu_move = rand(3)
    if user_move == cpu_move
      @output = "It's a draw!"
    elsif user_move == 0
      @output = case cpu_move
        when 1 then "You Lose!"
        when 2 then "You Win!"
      end
    elsif user_move == 1
      @output = case cpu_move
        when 2 then "You Lose!"
        when 0 then "You Win!"
      end
    else
      @output = case cpu_move
        when 0 then "You Lose!"
        when 1 then "You Win!"
      end
    end
    def to_string(num)
      case num
        when 0 then 'Paper'
        when 1 then 'Scissors'
        when 2 then 'Rock'
      end #Case
    end #to_string method
    @user_move = to_string(user_move)
    @cpu_move = to_string(cpu_move)
  end# result
end
