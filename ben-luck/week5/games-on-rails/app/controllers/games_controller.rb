
class GamesController < ApplicationController


  def m8b
  end

  def answer
    @question = params[:question]
    answers = ['As I see it, yes.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.','Concentrate and ask again.','Don’t count on it.','It is certain.','It is decidedly so.','Most likely.','My reply is no.','My sources say no.','No chance mate.']
    @answer = answers.sample
  end

end
