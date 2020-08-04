class EightsController < ApplicationController

  # form for player to enter a question.
  def question
  end# play

  # provides an answer to the question.
  def answer
    @question = params[:question]
    i = rand 1..3
    case i
    when 1 then @answer = "You crazy!!!"
    when 2 then @answer = "That sounds right."
    when 3 then @answer = "Probably not."
    end

  end #
end # Eight_ballsController
