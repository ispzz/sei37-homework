class ActorsController < ApplicationController
  def new
    @actor = Actor.new
  end

  def create
    Actor.create actor_params
    redirect_to actors_path
  end

  def index
    @actors = Actor.all
  end

  def show
    @actor = Actor.find params[:id] 
  end

  def edit
    @actor = Actor.find params[:id]
  end

  def update
    actor = Actor.find params[:id]
    actor.update actor_params
    redirect_to(actor_path(params[:id]))
  end

  def destroy
    Actor.destroy params[:id]
    redirect_to actors_path
  end

  private
  def actor_params
    params.require(:actor).permit(:name, :dob, :nationality, :bio, :image)
  end

end
