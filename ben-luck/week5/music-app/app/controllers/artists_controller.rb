class ArtistsController < ApplicationController

  # CREATE ###########################
  def new
    @artist = Artist.new
  end

  def create
    Artist.create artist_params
    redirect_to artists_path
  end


  # READ ##########################################
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
  end

   # UPDATE ######################################
  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]

    # Use the same strong params method we used in the create action, for this update:
    artist.update artist_params

    # No template for updates; redirect to the show page (using the path helper)
    redirect_to( artist_path(params[:id]) )
  end

  # DESTROY #######################################
  def destroy
    Artist.destroy params[:id]
    redirect_to artists_path
  end


  private
  # ^ private means the following methods (until the end of the class)
  #   are NOT actions, i.e. they do not correspond to routes

  # Strong params! Acts like a doorman with a door list, only letting through
  # the specified form param fields, so we can add them to our table
  def artist_params
    params.require(:artist).permit( :name, :dob, :nationality, :followers, :image )
  end
end
