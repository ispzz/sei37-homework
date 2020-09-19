class MagiceightballController < ApplicationController
  def result
    @question = params[:question]
    @answers =['Good','Bad','Who knows']
  end
end
