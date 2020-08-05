class GamethreeController < ApplicationController

  def form
  end

  def play
    
    rps_result = {
      "rock" => {
        "rock" => "It's a draw.",
        "paper" => "You lose.",
        "scissors" => "You win."
      },
      "paper" => {
        "rock" => "You win.",
        "paper" => "It's a draw.",
        "scissors" => "You lose."
      },
      "scissors" => {
        "rock" => "You lose.",
        "paper" => "You win.",
        "scissors" => "It's a draw."
      }
    }

    @throw = params[:throw]
  
    @computer_throw = ["rock", "paper", "scissors"][rand(0..2)]

    @result = rps_result[@throw][@computer_throw]

  end
  
  
end
