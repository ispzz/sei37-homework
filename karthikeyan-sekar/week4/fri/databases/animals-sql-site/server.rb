require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'



ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

class Animal < ActiveRecord::Base
  has_many :spotters
end

class Spotter < ActiveRecord::Database
  belongs_to :animal

after do
  ActiveRecord::Base.connection.close
end

#binding.pry


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

get "/" do
  erb :home
end

get "/animals" do
  @results = Animal.all
  p @results
  erb :index
end

get "/animals/:id" do
  @animal = Animal.find params[:id]
  erb :show
end

Animal.create(
    name: params[:name],
    species: params[:species],
    description: params[:description],
    roundness: params[:roundness],
    alive: params[:alive],
    age: params[:age],
    image_url: params[:image_url]
  )

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
  # update_sql = "UPDATE animals SET
  # name = '#{ params[:name]}',
  # species = '#{params[:species]}',
  # description = '#{params[:description]}',
  # roundness = #{params[:roundness]},
  # alive = #{params[:alive]},
  # age = #{params[:age]},
  # image_url = '#{params[:image_url]}'
  # WHERE id = #{ params[:id]};"
  #
  # db_query update_sql

  animal = Animal.find params[:id]

  animal.update(
name: params[:name],
species: params[:species],
description: params[:description],
roundness: params[:alive],
age: params[:age],
image_url: params[:image_url]
  )
  redirect "/animals/#{params[:id]}"
end

get "/animals/:id/delete" do
  #db_query "DELETE FROM animals WHERE id = #{param[:id]};"
  Animal.destroy params[:id]
  redirect '/animals'
end

# create #####

#1 Show a blank form: GET /spotters/new
#2. Form submits to here: POST /spotters

# Read ###############

#1. Index of all rows/items in the table: GET /spotters
get "/spotters" do
  @spotters = Spotter.all
  erb :
#2. Show page - details for one row/item: GET /spotters/:# IDEA:

# Update ##############

#1. Show a pre-populated form with the details for one row/item: GET /spotters/:id/edit

#2. Edit form submits here, and we do a DB update: POST /spotters/:id
