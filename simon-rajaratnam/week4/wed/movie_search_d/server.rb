# movie search
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get "/movie" do
  erb :form
end # movie


get "/movie/search" do
  erb :test
end
