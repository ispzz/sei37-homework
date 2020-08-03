require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.db'
)

class Brand < ActiveRecord::Base
  has_many :cars
end

class Car < ActiveRecord::Base
  belongs_to :brand
end

after do
  ActiveRecord::Base.connection.close
end

get "/" do
  erb :'brands/home'
end

# CREATE -----------------------------------------------------------------------

# 1. Show blank form where brand details can be added

get "/brands/new" do
  erb :'brands/new'
end

#2. Form submits to action route

post "/brands" do
  Brand.create(
    name: params[:name],
    established_in: params[:established_in],
    country_of_origin: params[:country_of_origin],
    description: params[:description],
    logo_url: params[:logo_url]
  )

  redirect '/brands'
end

# Brands ***********************************************************************

# READ -------------------------------------------------------------------------

# 1. List all rows in table

get "/brands" do
  @brands = Brand.all
  erb :'brands/index'
end

# 2. Show all info about a single row

get "/brands/:id" do
  @brands = Brand.all
  @brand = Brand.find params[:id]
  erb :'brands/show'
  # binding.pry
end

# UPDATE -----------------------------------------------------------------------

# 1. Display pre-filled form; contains column values for that row
get "/brands/:id/edit" do
  @brand = Brand.find params[:id]
  erb :'brands/edit'
end

# 2. Form submits to action route

post "/brands/:id" do
  brand = Brand.find params[:id]

  brand.update(
    name: params[:name],
    established_in: params[:established_in],
    country_of_origin: params[:country_of_origin],
    description: params[:description],
    logo_url: params[:logo_url]
  )

  redirect "/brands/#{params[:id]}"
end

# DESTROY ----------------------------------------------------------------------

get "/brands/:id/delete" do
  Brand.destroy params[:id]
  redirect "/brands"
end

# Cars *************************************************************************

# CREATE -----------------------------------------------------------------------

# 1. Show blank form where brand details can be added

get "/cars/new" do
  erb :'cars/new'
end

#2. Form submits to action route

post "/cars" do
  Car.create(
    name: params[:name],
    image_url: params[:image_url],
    brand_id: params[:brand_id]
  )

  redirect "/cars"
end

# READ -------------------------------------------------------------------------

# 1. List all rows in table

get "/cars" do
  @cars = Car.all
  erb :'cars/index'
end

# 2. Show all info about a single row

get "/cars/:id" do
  @cars = Car.all
  @car = Car.find params[:id]
  erb :'cars/show'
end

# UPDATE -----------------------------------------------------------------------

# 1. Display pre-filled form; contains column values for that row

get "/cars/:id/edit" do
  @car = Car.find params[:id]
  erb :'cars/edit'
end

# 2. Form submits to action route

post "/cars/:id" do
  car = Car.find params[:id]

  car.update(
    name: params[:name],
    image_url: params[:image_url],
    brand_id: params[:brand_id]
  )
  redirect "cars/#{params[:id]}"
end

# DESTROY ----------------------------------------------------------------------

get "/cars/:id/delete" do
  Car.destroy params[:id]
  redirect "/cars"
end
