require 'sinatra'
require 'sinatra/reloader'
require 'pry' # for debugging
require 'sqlite3' # so we can talk to the database


get "/" do
  # p "you're in the server file"
  erb :home
end # /


### create an entry

get "/mountains/new" do
  erb :new
end #/mountain/new

# recieves the completed form and adds it to the database
post "/mountains" do

  # p "#{ params[:name] }"
  insert_sql = "INSERT INTO mountains ( name, local_name, location, height, description, image_url )
  VALUES(
    '#{ params[:name] }',
    '#{ params[:local_name] }',
    '#{ params[:location] }',
    #{ params[:height] },
    '#{ params[:description] }',
    '#{ params[:image_url] }'
    );"

    db = SQLite3::Database.new 'database.db'
    db.results_as_hash = true
    puts'=========================================='
    puts insert_sql
    puts '=============================================='
    db.execute insert_sql
    db.close # not sure what this does :)

    redirect '/mountains'
end# post /mountains

###### Read

# let's read the database.
get "/mountains" do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  @results = db.execute 'SELECT * FROM mountains;'
  db.close # not sure what this does :)

  erb :index
end # /mountains

get "/mountains/:id" do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  @mountain = db.execute "SELECT * FROM mountains WHERE id = #{params[:id] };"
  db.close # not sure what this does :)
  @mountain = @mountain.first
  # p @mountain['name']
  erb :show
end # /mountains/:id

####### Update

 # show a form of prefilled details to edit
get "/mountains/:id/edit" do
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  @mountain= db.execute "SELECT * FROM mountains WHERE id = #{params[:id] };"
  db.close
  @mountain = @mountain.first

  erb :edit
end # /mountains/:id/edit

 # the edited form is submitted to WHERE
post "/mountains/:id" do

  update_sql = "UPDATE mountains SET
    name = '#{ params[:name] }',
    height = '#{ params[:height] }',
    description = '#{ params[:description] }'
  WHERE id = #{ params[:id] } ;"

  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true
  @mountain= db.execute update_sql
  db.close

  redirect "/mountains/#{ params[:id] }"
end # /mountains/:id
