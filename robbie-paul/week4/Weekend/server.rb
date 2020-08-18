require 'sinatra'
require 'sinatra/reloader'
require 'pry' #for debugging
require 'sqlite3'

require 'active_record' 
# #Set up the ActiveRecord DB conneciton
ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3', #What kind of DB form
    database: 'database.db' #Where is the actual database.
)

# Tell ActiveRecord how to talk to ...
class Language < ActiveRecord::Base
    has_many :learners
end

class Learner < ActiveRecord::Base
    belongs_to :language
end

# Code inside an 'after' block is run by Sinatra after any other route handler runs
after do
    ActiveRecord::Base.connection.close
#     # CLean up after ourselves...
end

def db_query( sql )
    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    #Debugging output for queries, in server terminal. 
    puts "================================================================================="
    puts sql
    puts "==================================================================="
    results = db.execute sql
    db.close #clean up after ourselves
    results #return the results from function
end

#Home page route

get "/" do
    erb :'languages/home'
end

# CRUD SYSTEM FOR LANGUAGES

# Create

# 1. Show blank form where language details can be added

get "/languages/new" do
    erb :'languages/new'
end #end languages/new

# # 2. Form submits to the action route
post "/languages" do

    Language.create(
        name: params[:name],
        family: params[:family],
        countries: params[:countries],
        description: params[:description],
        difficulty: params[:difficulty],
        alive: params[:alive],
        image_url: params[:image_url]
    )
    redirect '/languages'
end

# # Read 
# # 1. Index - list all rows in the table

get "/languages" do
    # Get all the languages from the DB using 'select'
    # @results = db_query 'SELECT * FROM languages'
    @languages = Language.all
    
    erb :'languages/index'
end

# # 2. Detail - show all the info for a single row
get "/languages/:id" do
#     # Get all langs from the DB using 'SELECT'
    # @language = db_query "SELECT * FROM languages WHERE id = #{ params[:id]};"
    @language = Language.find params[:id]

    erb :'languages/show'
end #/languages/:id

# UPDATE
# 
# 1. Show a form which is pre-filled with the column values for that row
get "/languages/:id/edit" do
    @language = db_query "SELECT * FROM languages WHERE id = #{ params[:id]};"
    @language = @language.first

    erb :'languages/edit'
end #/languages/:id/edit

# #2 . Edit form submits to this action route 
post "/languages:id" do
    language = Language.find params[:id]

    # call the update method on it to change all its columns at once
    language.update(
        name: params[:name],
        family: params[:family],
        countries: params[:countries],
        description: params[:description],
        difficulty: params[:difficulty],
        alive: params[:alive],
        image_url: params[:image_url]
    )
        redirect "/animals/#{ params[:id] }"
end

# DELETE

# 1 Delete the specified row

get "/languages/:id/delete" do
    # db_query "DELETE FROM languages WHERE id= #{params[:id] };"
    Language.destroy params[:id]

    # No template
    redirect 'languages'
end

# LEARNERS ROUTES

# CREATE ##########################################################

    # 1 Show a blank form  : GET /spotters/new

    get "/learners/new" do
        erb :'learners/new'
    end #end learners/new

    # 2. Form submits to here, and we do a DB create:  POST /spotters

        

# READ ############################################################

    # 1. Index of all rows in the table. GET /spotters

    get "/learners" do
        @learners = Learner.all #active.record: 
        erb :'learners/index'
    end

    # 2. Show page - details for one row/item : GET /spotters/:id

    get "/learners/:id" do
        @learner = Learner.find params[:id]
        erb :'learners/show'
    end

# UPDATE ##########################################################

    # # 1. Show a pre-populated form with the details for one row/item: GET/spotters/:id/edit

    get "/learners/:id/edit" do
        @learner = db_query "SELECT * FROM learners WHERE id = #{ params[:id]};"
        @learner = @learner.first
    end
    # 2. Edit form submits here and we do a DB update: POST /spotters/:id

    post "/learners/:id" do
    learner = Learner.find params[:id]
    
    # call the update method on it to change all its columns at once
    learner.update(
        name: params[:name],
        location: params[:location],
        language_id: params[:language_id],
    )

        redirect "/learners/#{ params[:id] }"
    end

# DELETE ##########################################################

    # Delete a specific row/item form the DB by ID



