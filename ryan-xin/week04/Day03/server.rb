# Load the sinatra libraries (gems)
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get "/" do
  erb :intro
end


get "/search" do
  erb :search
end


get "/search/result" do

  @movie_name = params[:movie_name].downcase
  
  response = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=dd8cc66a6d1087cd35c7346f5cc13ba1&query=#{@movie_name}"
  
  @result = response['results']

  erb :result
end


get "/search/result/:id" do

  @id = params[:id]
  
  response = HTTParty.get "https://api.themoviedb.org/3/movie/#{@id}?api_key=dd8cc66a6d1087cd35c7346f5cc13ba1&language=en-US"

  @result = response

  erb :content
end



# A route which displays a blank form where the user can enter a search term; which submits to...

# A route which uses the submitted search term to search themoviedb.org and output the results into the template, one result per line (probably use <ul> and <li>) - at least the title, maybe the year too

# Optionally: also show a movie poster thumbnail for each result (you will have to do your own research to work out how to construct the full URL for a poster image; you're not the first person to attempt this)

# Optionally: if you're feeling very brave, make each search result a link, which uses the movie ID returned in the results to go to another route on your sinatra site (like /movie/234235) - the route block can use the ID in the route URL (via params) to make another request to themoviedb.org, this time to a different endpoint to get the extended movie details (including budget etc - RTFM to find out the URL), and show these details in a template (I did say if you were feeling brave)