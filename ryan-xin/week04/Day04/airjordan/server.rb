require "sinatra"
require "sinatra/reloader"
require "pry"
require "sqlite3"

get "/" do
  erb :home
end

# ---------------------------------- Method ---------------------------------- #
def db_query(sql)
  db = SQLite3::Database.new "database.db"
  db.results_as_hash = true
  results = db.execute sql
  db.close
  results
end


# ---------------------------------- Create ---------------------------------- #
# Form
get "/airjordans/new" do
  erb :new
end

# Submitted
post "/airjordans" do
  insert_sql = "INSERT INTO airjordans (name, original_release, designer, color, price, retro, image_url)
  VALUES(
    '#{params[:name]}',
    #{params[:original_release]},
    '#{params[:designer]}',
    '#{params[:color]}',
    '#{params[:price]}',
    #{params[:retro]},
    '#{params[:image_url]}'
  );"
  db_query insert_sql

  redirect "/airjordans"
end


# ----------------------------------- Read ----------------------------------- #
# Index Page
get "/airjordans" do
  @results = db_query "SELECT * FROM airjordans;"

  erb :index
end # end Index Page

# Detail Page
get "/airjordans/:id" do
  results = db_query "SELECT * FROM airjordans WHERE id = #{params[:id]};"
  @airjordan = results.first

  erb :show  
end # end Detail Page


# ---------------------------------- Update ---------------------------------- #
# Pre-filled Form (Read Data)
get "/airjordans/:id/edit" do
  results = db_query "SELECT * FROM airjordans WHERE id = #{params[:id]};"
  @airjordan = results.first

  erb :edit
end

# Update Detail Page
post "/airjordans/:id" do
  update_sql "UPDATE airjordans SET 
    name = '#{params[:name]}',
    original_release = #{params[:original_release]},
    designer = '#{params[:designer]}',
    color = '#{params[:color]}',
    price = '#{params[:price]}',
    retro = #{params[:retro]},
    image_url = '#{params[:image_url]}'
  WHERE id = #{params[:id]};"
  db_query update_sql

  redirect "/airjordans/#{params[:id]}"
end


# ---------------------------------- Delete ---------------------------------- #
get "/airjordans/:id/delete" do
  db_query "DELETE FROM airjordans WHERE id = #{params[:id]};"

  redirect "/airjordans"
end