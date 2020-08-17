class PlayersController < ApplicationController

  def new
    @player = Player.new
  end

  def create
    Player.create player_params
    redirect_to players_path
  end

  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end

  def edit
    @player = Player.find params[:id]
  end

  def update
    player = Player.find params[:id]
    player.update player_params
    redirect_to(team_path(params[:id]))
  end

  def destroy
    Player.destroy params[:id]
    redirect_to players_path
  end

  private

    def player_params
      params.require(:player).permit(:name, :number, :position, :height, :weight, :image, :team_id)
    end

end
