class TeamsController < ApplicationController

  # CREATE
  def new
    @team = Team.new
  end
  
  def create
    Team.create team_params
    redirect_to(teams_path)
  end
    

  # READ
  def index
    @teams = Team.all
    @team = Team.new
  end
  
  def show
    @team = Team.find params[:id]
  end
  
  
  # UPDATE
  def edit
    @team = Team.find params[:id]
  end

  def update
    team = Team.find params[:id]
    team.update team_params

    team.players << Player.find(params[:player_ids])

    redirect_to(team_path(params[:id]))
  end


  # DESTROY
  def destroy
    Team.destroy params[:id]
    redirect_to(teams_path)
  end
  

  private

  def team_params
    params.require(:team).permit(:name, :founded, :stadium, :logo, :manager, :ucl)
  end
  
  
  
end
