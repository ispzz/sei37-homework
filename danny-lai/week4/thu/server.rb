
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

def db_query (sql)
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  # debugging output for our queries, in the server terminal:
  puts '==============================='
  puts sql
  puts '==============================='
  results = db.execute sql
  db.close # clean up after ourselves
  results # return the results from this function
end # db_query

# homepage route
get "/" do
  erb :home
end # /

# CREATE

get "/noodles/new" do
  erb :new
end # /noodles/new

post "/noodles" do
  insert_sql = "INSERT INTO noodles (name, deliciousness, country_of_origin, description, image_url)
    VALUES(
      '#{params[:name]}',
      #{params[:deliciousness]},
      '#{params[:country_of_origin]}',
      '#{params[:description]}',
      '#{params[:image_url]}'
      );"

  db_query insert_sql

  redirect "/noodles"
end

# READ

get "/noodles" do
  @results = db_query "SELECT * FROM noodles;"
  erb :index
end # /noodles

get "/noodles/:id" do
  @noodles = db_query "SELECT * FROM noodles WHERE id = #{params[:id]}"
  @noodles = @noodles.first
  erb :show
end # /noodles/:id

# UPDATE

get "/noodles/:id/edit" do
  @noodles = db_query "SELECT * FROM noodles WHERE id = #{params[:id]};"
  @noodles = @noodles.first
  erb :edit
end # /noodles/:id/edit

post "/noodles/:id" do
  update_sql = "UPDATE noodles SET
    name = '#{params[:name]}',
    deliciousness = '#{params[:deliciousness]}',
    country_of_origin = '#{params[:country_of_origin]}',
    description = '#{params[:description]}',
    image_url = '#{params[:image_url]}'
    WHERE id = #{params[:id]};"

    db_query update_sql

    redirect "/noodles/#{params[:id]}"
end # /noodles/:id

# DELETE

get "/noodles/:id/delete" do
  db_query "DELETE FROM noodles WHERE id = #{params[:id]};"
  redirect '/noodles'
end
