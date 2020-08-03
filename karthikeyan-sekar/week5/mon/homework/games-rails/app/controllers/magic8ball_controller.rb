class Magic8ballController < ApplicationController
def home
end
def result
  responses = ['As I see it, yes','It is certain', 'Concentrate and ask again', 'Very doubtful', 'Do not count on it','Better not tell you now' ]
    @result = responses[rand(6)]
end
end
