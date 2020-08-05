require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'


# Set up the ActiveRecord DB connection
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',     # What kind of DB format is this?
  database: 'database.db' # what is the actual DB data?
)

class Location < ActiveRecord::Base
  has_many :creatures
end # class Location

class Creature < ActiveRecord::Base
  belongs_to :location
end # Fishes

after do
  ActiveRecord::Base.connection.close
end # after



get "/" do
  erb :'locations/home'
end # /


#########################################
#########################################

# Locations routes

## Create ##

get "/locations/new" do
  erb :'locations/new'
end # /locations/new

post "/locations" do
  Location.create(
    name: params[:name],
    location: params[:location],
    image_url: params[:image_url]
  )
  redirect '/locations'
end # post /locations


## Read ##

get "/locations" do
  @results = Location.all
  erb :'locations/index'
end # /locations/index

get "/locations/:id" do
  @location = Location.find params[:id]
  @creatures = Creature.where(:location_id => params[:id])
  erb :'locations/show'
end # /locations/show


## Update ##

get "/locations/:id/edit" do
  @location = Location.find params[:id]
  erb :'locations/edit'
end # /location/:id/edit

post "/locations/:id" do
  location = Location.find params[:id]
  location.update(
    name: params[:name],
    location: params[:location],
    image_url: params[:image_url]
  )
  redirect "/locations/#{params[:id]}"
end # /locaton/:id


## Delete ##

get "/locations/:id/delete" do
  Location.destroy params[:id]
  redirect "/locations"
end # /locations/:id/delete


#################################################
#################################################

#Creatures routes

## Create ##

get "/creatures/new" do
    @locations = Creature.first.locations
  erb :'creatures/new'
end # /creatures/new

post "/creatures" do
  Creature.create(
  name: params[:name],
  kind: params[:kind],
  max_length: params[:max_length],
  max_weight: params[:max_weight],
  description: params[:description],
  image_url: params[:image_url],
  location_id: params[:location_id]
  )
  redirect "/creatures"
end # /creatures

## Read ##

get "/creatures" do
  @locations = Location.all
  erb :'creatures/index'
end # /fishes

get "/creatures/:id" do
  @creature = Creature.find params[:id]
  erb :'creatures/show'
end # /greatures/:id


## Update ##

get "/creatures/:id/edit" do
    @creature = Creature.find params[:id]
  erb :'creatures/edit'
end # /create/:id/edit

post "/creatures/:id" do
  creature = Creature.find params[:id]
  creature.update(
    name: params[:name],
    kind: params[:kind],
    max_length: params[:max_length],
    max_weight: params[:max_weight],
    description: params[:description],
    image_url: params[:image_url]
  )
  redirect "/creatures/#{params[:id]}"
end # /creatures/:id

## delete ##

get "/creatures/:id/delete" do
  Creature.destroy params[:id]
  redirect "/locations"
end # /animal/:id/delete
