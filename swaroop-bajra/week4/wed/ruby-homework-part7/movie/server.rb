require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :form
end

get "/lookup" do
  response = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query= #{params[:movie_name]}")

  @result = response['results']
  erb :result
end
