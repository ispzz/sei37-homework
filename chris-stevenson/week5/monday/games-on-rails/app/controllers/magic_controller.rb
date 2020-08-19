class MagicController < ApplicationController
  def form
  end
  def result
    @question = params[:question]
    random = rand(6)
    @answer = case random
      when 0 then 'Yes.'
      when 1 then 'No.'
      when 2 then 'Maybe.'
      when 3 then 'Yes, but only on Tuesdays.'
      when 4 then 'Wow. No. And will never change.'
      when 5 then 'That question is above my pay grade.'
    end
  end
end
