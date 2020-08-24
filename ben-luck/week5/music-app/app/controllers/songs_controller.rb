class SongsController < ApplicationController

  # CREATE ###################################

  # def new
  #   @song = Song.new
  # end
  #
  # def create
  #   Song.create song_params  # strong params
  #   redirect_to songs_path
  # end

  # READ #########################################
  def index
    @songs = Song.all
  end

  def show
    @songs = Song.find params[:id]
  end

  # UPDATE ######################################
  # def edit
  #   @song = Song.find params[:id]
  # end
  #
  # def update
  #   song = Song.find params[:id]
  #   song.update song_params
  #
  #   redirect_to( song_path(params[:id]) )
  # end

  # DESTROY ##########################################
  # def destroy
  #   Song.destroy params[:id]
  #   redirect_to songs_path
  # end
  #
  # def song_params
  #   params.require( :song ).permit( :name, :release, :downloads, :rank, :review, :artist_id )
  # end
end
