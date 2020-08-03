require 'sinatra'
require 'sinatra/reloader'
require 'httparty' # load gem

# 1. Show blank form
get "/" do
  erb :form
end

# 2. Form submits to here
get "/lookup" do

  response = HTTParty.get("https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{params[:movies]}") # object of search alien, inside the form of :movies, doesnt matter which search string

  @movie = response['results'] #


  erb :result

end # /lookup
