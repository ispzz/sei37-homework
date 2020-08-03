require 'sinatra'
require 'sinatra/reloader'
require 'pry'

require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

class Trainer < ActiveRecord::Base
  has_many :mons
end

class Mon < ActiveRecord::Base
  belongs_to :trainer
end

after do
  ActiveRecord::Base.connection.close
end

get "/" do
  erb :home
end

#CRUD for Mons
#Create
#Blank for where pokemon details can be added
get "/mons/new" do
  erb :'mons/new'
end

#Submit form to action route
post "/mons" do
  Mon.create(
    name: params[:name],
    type1: params[:type1],
    type2: params[:type2],
    pokedex: params[:pokedex],
    weight: params[:weight],
    height: params[:height],
    image_url: params[:image_url],
    trainer_id: params[:trainer_id]
  )
  redirect "/mons"
end

#Read
#List of rows in table
get "/mons" do
  @results = Mon.all
  erb :'mons/index'
end #/mons
#Full information on specific row
get "/mons/:id" do
  @mon = Mon.find params[:id]
  erb :'mons/show'
end

#update
get "/mons/:id/edit" do
  @mon = Mon.find params[:id]
  erb :'mons/edit'
end

post "/mons/:id" do
  mon = Mon.find params[:id]
  mon.update(
    name: params[:name],
    type1: params[:type1],
    type2: params[:type2],
    pokedex: params[:pokedex],
    weight: params[:weight],
    height: params[:height],
    image_url: params[:image_url],
    trainer_id: params[:trainer_id]
  )
  redirect "/mons/#{params[:id]}"
end

#delete
get "/mons/:id/delete" do
  Mon.destroy params[:id]
  redirect '/mons'
end

#######################################   TRAINERS  #################################################

#CRUD for Mons
#Create
#Blank for where pokemon details can be added
get "/trainers/new" do
  erb :'trainers/new'
end

#Submit form to action route
post "/trainers" do
  Trainer.create(
    name: params[:name],
    age: params[:age],
    home_town: params[:home_town],
    image_url: params[:image_url]
  )
  redirect "/trainers"
end

#Read
#List of rows in table
get "/trainers" do
  @results = Trainer.all
  erb :'trainers/index'
end #/trainers
#Full information on specific row
get "/trainers/:id" do
  @mon = Mon.where(:trainer_id => params[:id])
  @trainer = Trainer.find params[:id]
  erb :'trainers/show'
end

#update
get "/trainers/:id/edit" do
  @trainer = Trainer.find params[:id]
  erb :'trainers/edit'
end

post "/trainers/:id" do
  trainer = Trainer.find params[:id]
  trainer.update(
    name: params[:name],
    age: params[:age],
    home_town: params[:home_town],
    image_url: params[:image_url]
  )
  redirect "/trainers/#{params[:id]}"
end

#delete
get "/trainers/:id/delete" do
  Trainer.destroy params[:id]
  redirect '/trainers'
end
