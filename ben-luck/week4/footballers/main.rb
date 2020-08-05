# Require all the gems we need:
require 'sqlite3'           # Sqlite3 for our database
require 'pry'               # Pry for debugging
require 'sinatra'           # Sinatra for our web server
require 'sinatra/reloader'  # Sinatra Reloader so we don't need to keep restarting our server

def db_query ( sql )
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  # Debugging output for our queries, in the server terminal:
  puts '================================'
  puts sql
  puts '================================'
  results = db.execute sql
  db.close

  results #returns the results from this function
end # db_query


# Home page route
get "/" do
  erb :home
end # /

# Create ########################################

# 1. Show a blank for where footballer details can be added
get "/footballers/new" do
    erb :new
end # /footballers/new
# submits post /footballers

# 2. Form submits to the action route
post "/footballers" do
  insert_sql = "INSERT INTO footballers (name, position, club, retired, kit_number, profile_image)
    VALUES(
      '#{ params[:name] }',
      '#{ params[:position] }',
      '#{ params[:club] }',
      #{ params[:retired] },
      #{ params[:kit_number] },
      '#{ params[:profile_image] }'
    );"

    # execute the query and ignore the result!
    db_query insert_sql

    # redirect to the index page of all footballers - from there we can see that the animal was added successfully... abd the redirect also prevents a user reload from duplicating (re-inserting) this footballer into the DB
    redirect '/footballers'

end # post /footballers


# Read ###########################################

# 1. Index - list all rows in the table
get "/footballers" do
  # Get all animals from the DB using 'SELECT'
  @results = db_query 'SELECT * FROM footballers;'

  erb :index
end # /footballers

# 2. Detail (show)- show all the info for a single row
get "/footballers/:id" do
  @footballer = db_query "SELECT * FROM footballers WHERE id = #{params[:id] };"
  @footballer = @footballer.first

  erb :show
end # /footballers/id

# Update (edit) ####################################

# 1. Show a form which is pre-filled with the column values for that row
get "/footballers/:id/edit" do
  @footballer = db_query "SELECT * FROM footballers WHERE id = #{params[:id] };"
  @footballer = @footballer.first

  erb :edit
end #/footballers/:id/edit

# 2. Edit form submits to this action route
post "/footballers/:id" do

  update_sql = "UPDATE footballers SET
    name = '#{ params[:name] }',
    position =  '#{ params[:position] }',
    club = '#{ params[:club] }',
    retired = #{ params[:retired] },
    kit_number = #{ params[:kit_number] },
    profile_image = '#{ params[:profile_image] }'
    WHERE id = #{ params[:id] } ;"

  db_query update_sql

  # redirect to the show page, using the ID from the current URL
  redirect "/footballers/#{ params[:id] }"

end # /footballers/:id

# Delete ############################################

# 1. Delete the specified row

get "/footballers/:id/delete" do
  db_query "DELETE FROM footballers WHERE id = #{ params[:id] } ;"

  # No template to show, redirect to the index
  redirect '/footballers'
end #/footballers/:id/delete
