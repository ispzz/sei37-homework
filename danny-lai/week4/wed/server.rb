require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :homepage
end # /

get "/lookup" do
  erb :form
end # /lookup

get "/lookup/result" do
  @movie = params[:movie]
  response = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=b0552bd9df8f09b28a6a2f18636e5e19&query=#{@movie}")
  @result = response['results']
  erb :movie_details
end # /lookup/result

# API b0552bd9df8f09b28a6a2f18636e5e19
