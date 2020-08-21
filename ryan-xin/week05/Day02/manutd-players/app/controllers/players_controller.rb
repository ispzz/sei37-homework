class PlayersController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false
  
  
  # CREATE
  def new
  end

  def create 
    Player.create(
      name: params[:name],
      age: params[:age],
      position: params[:position],
      number: params[:number],
      country: params[:country],
      image: params[:image]
    )
    redirect_to(players_path)
  end


  # READ
  def index
    @players = Player.all
  end
  
  def show
    @player = Player.find params[:id]
  end
  
  
  # UPDATE
  def edit
    @player = Player.find params[:id]
  end
  
  def update 
    player = Player.find params[:id]
    player.update(
      name: params[:name],
      age: params[:age],
      position: params[:position],
      number: params[:number],
      country: params[:country],
      image: params[:image]      
    )
    redirect_to(player_path(params[:id]))
  end
  
  
  # DELETE
  def delete 
    Player.destroy params[:id]
    redirect_to(players_path)
  end
  
  
end
