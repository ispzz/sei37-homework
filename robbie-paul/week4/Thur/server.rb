require 'sinatra'
require 'sinatra/reloader'
require 'pry' # for debugging
require 'sqlite3' # so we can talk to our SQL database.


# DRY up our routes by creating a reusable DB query function

def db_query( sql )
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    #Debugging output for our queries, in the server terminal
    puts "=========================================================="
    puts sql
    puts "=========================================================="
    results = db.execute sql
    db.close #clean up after ourselves

    results #return the results from this function.
end

#Home page route
get "/" do
    erb :Home
end # /

# CRUD System for Animals

# Create

# 1. Show a blank form where animal details can be added

get "/animals/new" do
    erb :new
end # end animals/new

# 2. Form submits to the action route
post "/animals" do
    insert_sql = "INSERT INTO animals (name, species, description, roundness, alive, age, image_url)
    VALUES(
        '#{ params[:name] }',
        '#{ params[:species] }',
        '#{ params[:description] }',
        #{ params[:roundness] },
        #{ params[:alive] },
        #{ params[:age] },
        '#{ params[:image_url] }'
        );"

        # execute the query and ignore the result! (assume it worked)
        db_query insert_sql

        # redirect to the index page of all animals - from there we can see that the animal was added successfully ... and the redirect also prevents a user reload from duplicating... 

        redirect '/animals'

end # post /animals


# Read 

# Index - list all rows in the table

get "/animals" do

    # Get all animals from the DB using 'SELECT'

    @results = db_query 'SELECT * FROM animals;'

    erb :index
end #/animals

# 2. Detail - show all the info for a single row

get "/animals/:id" do

    @animal = db_query "SELECT * FROM animals WHERE id = #{ params[:id]};"
    @animal = @animal.first

    erb :show
end #/animals/:id

# Update

# 1. Show a form which is pre-filled with the colummn values for that row
get "/animals/:id/edit" do
    @animal = db_query "SELECT * FROM animals WHERE id = #{ params[:id]};"
    @animal = @animal.first
    
    
    erb :edit
end # /animals/:id/edit


# 2. Edit form submits to this action route

post "/animals/:id" do

    update_sql = "UPDATE animals SET

        name = '#{ params[:name] }',
        species = '#{ params[:species] }',
        description = '#{ params[:description] }',
        roundness = #{ params[:roundness] },
        alive = #{ params[:alive] },
        age = #{ params[:age] },
        image_url = '#{ params[:image_url] }'
        WHERE id = #{ params[:id] } ;"
        
        db_query update_sql

        #redirect ot the show page, using ID from the submitted URL
        redirect "/animals/#{ params[:id] }"

end #/animals/:id

# Delete




# 1 Delete the specified row

get "/animals/:id/delete" do
    db_query "DELETE FROM animals WHERE id = #{ params[:id] } ;"

    # No template to show , redirect to index
    redirect 'animals'
end # /animals/:id/delete



