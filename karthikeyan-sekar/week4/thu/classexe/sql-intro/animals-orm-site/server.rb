require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'


get "/" do
  erb :home
end

def db_query( sql )
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  # Debugging output for our queries, in the server terminal:
  puts '==========================================='
  puts sql
  puts '==========================================='
  results = db.execute sql
  db.close  # clean up after ourselves

  results  # return the results from this function
end # db_query

get "/animals" do
  @results = db_query 'SELECT * FROM animals;'
  p @results
  erb :index
end

get "/animals/:id" do
  @animal = db_query "SELECT * FROM animals WHERE id = #{params[:id]};"
  @animal = @animal.first
  erb :show
end

get "/animals/:id/edit" do
  @animal = db_query "SELECT * FROM animals WHERE id = #{ params[:id] };"
  @animal = @animal.first
  erb :edit
end  # /animals/:id/edit

post "/animals" do
  update_sql = "INSERT INTO animals (name, species, description, roundness, alive, age, image_url)values(
  '#{ params[:name]}',
  '#{params[:species]}',
  '#{params[:description]}',
  #{params[:roundness]},
  #{params[:alive]},
  #{params[:age]},
  '#{params[:image_url]}'
  );"
  db_query insert_sql
   redirect '/animals'
end

post "/animals/:id" do
  update_sql = "UPDATE animals SET
  name = '#{ params[:name]}',
  species = '#{params[:species]}',
  description = '#{params[:description]}',
  roundness = #{params[:roundness]},
  alive = #{params[:alive]},
  age = #{params[:age]},
  image_url = '#{params[:image_url]}'
  WHERE id = #{ params[:id]};"

  db_query update_sql
  redirect "/animals/#{params[:id]}"
end

get "/animals/:id/delete" do
  db_query "DELETE FROM animals WHERE id = #{param[:id]};"
  redirect '/animals'
end
