require 'sinatra'
require 'httparty'
require 'sinatra/reloader'

# 1. show blank form

get "/" do
    erb :form

end

# 2. form submits to here.

get "/lookup" do
    # params.to_s
    movie_name = params[:movie_name]
    response = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=2643a02f358b6fe0f83a06eceaeaa77e&query=#{movie_name}")
    @result = response['results']
    # @names = response[':name']
    erb :result

    # puts response.code

end #lookup movie.

