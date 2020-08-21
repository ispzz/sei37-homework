require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :home
end

get "/search" do
  @searched_movie = params[:searched_movie]
  response = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=4b4b29a7133cac7a6e819f81425755b5&query=#{params[:searched_movie]}&page=#{@counter}"
  @result = response['results']
  erb :search
end

get "/search/:movie" do
  @result = HTTParty.get "https://api.themoviedb.org/3/movie/#{params[:movie]}?api_key=4b4b29a7133cac7a6e819f81425755b5"

  erb :movie
end
