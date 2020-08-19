class RockPaperScissorsController < ApplicationController

    def throw
    end

    def play
      @throw = params[:throw]

      @i = rand 1..3
      case @i
      when 1 then @computer = "Rock"
      when 2 then @computer = "Paper"
      when 3 then @computer = "Scissors"
      end

      if @computer == @throw
        @status = "Congratulations!!! You win!"
      else
        @status = "Sorry the computer was too good. You loose!!"
      end

    end

end
