# ------------------------------ Database setup ------------------------------ #
require "sinatra"
require "sinatra/reloader"
require "pry"
require "active_record"


# Set up ActiveRecord DB connection
ActiveRecord::Base.establish_connection(
  adapter: "sqlite3", # What kind of DB format
  database: "database.db" # Where is the actual DB data
)


# Tell ActiveRecord how to talk to "teams" table
class Team < ActiveRecord::Base # Inherits all its functionality from ActiveRecord
  has_many :players
end # end Team class

# Tell ActiveRecord how to talk to "players" table
class Player < ActiveRecord::Base # Inherits all its functionality from ActiveRecord
  belongs_to :team
end # end Player class

# Close database connection after each route is handled
after do
  ActiveRecord::Base.connection.close
end # end close connection


# binding.pry


# ----------------------------------- Home ----------------------------------- #
get "/" do
  erb :"/home"
end # end "/"


# ----------------------------------- Team ----------------------------------- #

# Create -------------------------------------------------------
get "/teams/new" do
  @players = Player.all
  erb :"/teams/new"
end # end "/teams/new"

post "/teams" do
  Team.create(
    name: params[:name],
    nickname: params[:nickname],
    founded: params[:founded],
    stadium: params[:stadium],
    logo_url: params[:logo_url],
    manager: params[:manager],
    ucl: params[:ucl]
  )
  redirect "/teams"
end # end "/teams"


# Read -------------------------------------------------------
get "/teams" do
  @teams = Team.all
  erb :"/teams/index"
end # end "/teams"

get "/teams/:id" do
  @team = Team.find params[:id]
  erb :"/teams/show"
end # end "/teams/:id"


# Update -------------------------------------------------------
get "/teams/:id/edit" do
  @team = Team.find params[:id]
  @players = Player.all
  erb :"/teams/edit"
end # end "/teams/:id/edit"

post "/teams/:id" do
  team = Team.find params[:id]
  team.update(
    name: params[:name],
    nickname: params[:nickname],
    founded: params[:founded],
    stadium: params[:stadium],
    logo_url: params[:logo_url],
    manager: params[:manager],
    ucl: params[:ucl]  
  )
  # Get an array of players object by find by id array: params[:players_id]
  # Push these players rows to team.players
  # Active Record set the the players' team_id to team.id
  team.players << Player.find(params[:players_id])
  redirect :"/teams/#{params[:id]}"
end # end "/teams/:id"

# Delete -------------------------------------------------------
get "/teams/:id/delete" do
  Team.destroy params[:id]
  redirect "/teams"
end # end "/teams/:id/delete"



# ---------------------------------- Player ---------------------------------- #

# Create -------------------------------------------------------
get "/players/new" do
  @teams = Team.all
  erb :"/players/new"
end # end "players"

post "/players" do
  Player.create(
    name: params[:name],
    nationality: params[:nationality],
    age: params[:age],
    position: params[:position],
    number: params[:number],
    team_id: params[:team_id]
  )
  redirect "/players"
end # end "/players"

# Read -------------------------------------------------------
get "/players" do
  @players = Player.all
  erb :"/players/index"
end # end "/players"

get "/players/:id" do
  @player = Player.find params[:id]
  erb :"/players/show"
end # end "/players/:id"

# Update -------------------------------------------------------
get "/players/:id/edit" do
  @player = Player.find params[:id]
  @teams = Team.all
  erb :"/players/edit"
end # end "/players/:id/edit"

post "/players/:id" do
  player = Player.find params[:id]
  player.update(
    name: params[:name],
    nationality: params[:nationality],
    age: params[:age],
    position: params[:position],
    number: params[:number],
    team_id: params[:team_id]
  )
  redirect "/players/#{params[:id]}"
end # end "/players"

# Delete -------------------------------------------------------
get "/players/:id/delete" do
  Player.destroy params[:id]
  redirect "/players"
end # end "/players/:id/delete"