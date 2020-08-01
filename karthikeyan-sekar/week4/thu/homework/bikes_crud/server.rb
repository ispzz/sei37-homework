require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

def db_query( sql )
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  puts '==========================================='
  puts sql
  puts '==========================================='
  results = db.execute sql
  db.close

  results
end


get "/" do
  erb :home
end


get "/bikes/new" do
    erb :new
end



get "/bikes" do
  @results = db_query 'SELECT * FROM bikes;'
  p @results
  erb :index
end

get "/bikes/:id" do
  @bike = db_query "SELECT * FROM bikes WHERE id = #{params[:id]};"
  @bike = @bike.first
  erb :show
end

get "/bikes/:id/edit" do
  @bike = db_query "SELECT * FROM bikes WHERE id = #{ params[:id] };"
  @bike = @bike.first
  erb :edit
end  # /animals/:id/edit

post "/bikes" do
  insert_sql = "INSERT INTO bikes (brand, kind, models, price, available, image_url)values(
  '#{ params[:brand]}',
  '#{params[:kind]}',
  '#{params[:models]}',
  #{params[:price]},
  #{params[:available]},
  '#{params[:image_url]}'
  );"
  db_query insert_sql
   redirect '/bikes'
end

post "/bikes/:id" do
  update_sql = "UPDATE bikes SET
  brand = '#{ params[:brand]}',
  kind = '#{params[:kind]}',
  models = '#{params[:models]}',
  price = #{params[:price]},
  available = #{params[:available]},
  image_url = '#{params[:image_url]}'
  WHERE id = #{ params[:id]};"

  db_query update_sql
  redirect "/bikes/#{params[:id]}"
end

get "/bikes/:id/delete" do
  db_query "DELETE FROM bikes WHERE id = #{param[:id]};"
  redirect '/bikes'
end
