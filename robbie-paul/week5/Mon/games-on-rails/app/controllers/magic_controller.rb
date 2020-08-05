class MagicController < ApplicationController

    def form
    end

    def check_answer
    end

    def do_answer        
        @query = params[:query]

        answers_array = [ 'Without a doubt', 'Never gonna happen', 'Try again', 'As if!', 'Nice try', 'Outlook not so good', 'As I see it, yes.', 'It is decidedly so.' ]

        @answer = answers_array.shuffle.first
    end



end
