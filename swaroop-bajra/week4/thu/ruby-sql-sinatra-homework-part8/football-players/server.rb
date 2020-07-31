require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

def db_query(sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  puts '================================='
  puts sql
  puts '================================='
  results = db.execute sql
  db.close

  results # return the results from this function
end # db_query

get "/" do
  erb :home
end # /

# CRUD System for animals

# Create #################################################

# 1
get "/players/new" do
  erb :new
end

#2
post "/players" do

  insert_sql = "INSERT INTO players (name, club, country, position, goals, age, image_url)
  VALUES(
    '#{params[:name]}',
    '#{params[:club]}',
    '#{params[:country]}',
    '#{params[:position]}',
    #{params[:goals]},
    #{params[:age]},
    '#{params[:image_url]}'
    );"

db_query insert_sql
redirect '/players'

end

# Read ###################################################

# 1
get "/players" do
  @results = db_query 'SELECT * FROM players;'
  erb :index
end

# 2
get "/players/:id" do
  @player = db_query "SELECT * FROM players WHERE id = #{params[:id]};"
  @player = @player.first
  erb :show
end

# Update (edit) #############################################

# 1
get "/players/:id/edit" do
  @player = db_query "SELECT * FROM players
  WHERE id = #{params[:id]};"
  @player = @player.first
  erb :edit
end

# 2

post "/players/:id" do

  update_sql = "UPDATE players SET
    name = '#{params[:name]}',
    club = '#{params[:club]}',
    country = '#{params[:country]}',
    position = '#{params[:position]}',
    goals = #{params[:goals]},
    age = #{params[:age]},
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]} ;"

db_query update_sql
# redirect to the show page, using the ID
redirect "/players/#{params[:id]}"
end # /players/:id

# Delete

# 1. Delete the specified row

get "/players/:id/delete" do
  db_query "DELETE FROM players WHERE id = #{params[:id]} ;"
  # No template to show, redirect to the inbox
  redirect "/players"
end
