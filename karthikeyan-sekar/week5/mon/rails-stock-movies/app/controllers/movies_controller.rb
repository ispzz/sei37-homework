class MoviesController < ApplicationController
  def form
  end
  def search
  @query = params[:search_text]
  @results = HTTParty.get "https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=#{@query}"
  end
  def result
  end
end
