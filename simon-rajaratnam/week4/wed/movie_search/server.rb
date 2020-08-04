# Movie Search

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


#1. show the black form
get "/movie" do
  erb :form
end # movie

#2. Submits form from here.
get "/movie/search" do

  movie_name = params[:movie_name]

  lookup = "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{movie_name}"

  response = HTTParty.get(lookup)

  @movie = response['results']

  erb :results

end# /movie/search
