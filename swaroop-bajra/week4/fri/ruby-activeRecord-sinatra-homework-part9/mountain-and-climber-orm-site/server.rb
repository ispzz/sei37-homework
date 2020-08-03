require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

# Set up the ActiveRecord ON connection
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

# Telling ActiveRecord to talk to the 'mountains' table
class Mountain < ActiveRecord::Base
  has_many :climbers
end

class Climber < ActiveRecord::Base
  belongs_to :mountain
end

after do
  ActiveRecord::Base.connection.close
end

get "/" do
  erb :'mountains/home'
end # /

# CRUD System in place for mountains

# Create ##############################################

  # 1. Show a blank form where new mountain details can be added

  get '/mountains/new' do
    erb :'/mountains/new'
  end

  # 2. Form submits to the action route

  post '/mountains' do
    Mountain.create(
      name: params[:name],
      location: params[:location],
      height: params[:height],
      scalable: params[:scalable],
      first_ascent: params[:first_ascent],
      image_url: params[:image_url]
    );
    redirect :'mountains'
  end

# Read   ##############################################

  # 1. Index = list all rows in the table

  get '/mountains' do
    @results = Mountain.all
    erb :'mountains/index'
  end # /mountains

  # 2. Detail (show) - show all the info for a single rows

  get "/mountains/:id" do
    @mountain = Mountain.find params[:id]
    erb :'mountains/show'
  end # /mountains/:id

# Update (edit) ########################################

  # 1. Show a form which is pre-filled with the column values for that row

  get "/mountains/:id/edit" do
    @mountain = Mountain.find params[:id]
    erb :'mountains/edit'
  end

  # 2. Edit form submits to this action route

  post "/mountains/:id" do
    mountain = Mountain.find params[:id]

    mountain.update(
      name: params[:name],
      location: params[:location],
      height: params[:height],
      scalable: params[:height],
      first_ascent: params[:first_ascent],
      image_url: params[:image_url]
    );
    redirect "/mountains/#{params[:id]}"
  end

# Delete ###############################################

  # 1. Delete the specified row

  get "/mountains/:id/delete" do
    Mountain.destroy params[:id]
    redirect "/mountains"
  end

########################################################
########################################################

# CRUD System in place for climbers

# Create ##############################################

  # 1. Show a blank form where new mountain details can be added

  get '/climbers/new' do
    @climbers = Climber.all
    erb :'/climbers/new'
  end # /climbers/new

  # 2. Form submits to the action route

  post '/climbers' do
    Climber.create(
      name: params[:name],
      country: params[:country],
      mountain_id: params[:mountain_id],
      image_url: params[:image_url]
    );
    redirect :'climbers'
  end

# Read   ##############################################

  # 1. Index = list all rows in the table

  get '/climbers' do
    @climbers = Climber.all
    erb :'climbers/index'
  end # /climbers

  # 2. Detail (show) - show all the info for a single rows

  get "/climbers/:id" do
    @climber = Climber.find params[:id]
    erb :'climbers/show'
  end # /climbers/:id

# Update (edit) ########################################

  # 1. Show a form which is pre-filled with the column values for that row

  get "/climbers/:id/edit" do
    @climber = Climber.find params[:id]
    @climbers = Climber.all
    erb :'climbers/edit'
  end # /climbers/:id/edit

  # 2. Edit form submits to this action route

  post "/climbers/:id" do
    climber = Climber.find params[:id]

    climber.update(
      name: params[:name],
      country: params[:country],
      mountain_id: params[:mountain_id],
      image_url: params[:image_url]
    );
    redirect "/climbers/#{params[:id]}"
  end

# Delete ###############################################

  # 1. Delete the specified row

  get "/climbers/:id/delete" do
    Climber.destroy params[:id]
    redirect "/climbers"
  end
