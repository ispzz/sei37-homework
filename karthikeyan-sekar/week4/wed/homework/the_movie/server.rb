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
  @moviedomain = "http://image.tmdb.org/t/p/"
    @moviename = params[:movie_name]
 #the instance variable
  @movieurl =  "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@moviename}"
  @movieinfo = HTTParty.get@movieurl
  @moviearr = @movieinfo["results"]
  #"the result is #{result}"
    erb :result
end
