require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

# convention over configuration

get '/' do
  erb :home # embedded ruby
end

get '/faq' do
  erb :faq
end

get '/result' do
  @moviename = params[:movie_name]
 #the instance variable
  @movieurl =  "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@moviename}"
  @movieinfo = HTTParty.get@movieurl
  @movieimage = @movieinfo["results"][0]["poster_path"]
  @movietitle = @movieinfo["results"][0]["original_title"]
  @movierelease = @movieinfo["results"][0]["release_date"]
@movieoverview = @movieinfo["results"][0]["overview"]
  #"the result is #{result}"
    erb :result
end
