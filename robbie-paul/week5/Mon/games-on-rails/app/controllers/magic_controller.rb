class MagicController < ApplicationController

    def form
    end

    def check_answer
    end

    def answer      
        @query = params[:magic_question]

        answers_array = [ 'Without a doubt', 'Never gonna happen', 'Try again', 'As if!', 'Nice try', 'Outlook not so good', 'As I see it, yes.', 'It is decidedly so.' ]

        @answer = answers_array.sample
    end



end
