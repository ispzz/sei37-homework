class CharactersController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false
  def index
    @characters = Disney_characters.all
  end
  def show
    @character = Disney_characters.find params[:id]
  end
  def new
  end
  def create
    Disney_characters.create(
      name: params[:name],
      debut: params[:debut],
      age: params[:age],
      image: params[:image]
    )
    redirect_to("/")
  end
  def edit
    @character = Disney_characters.find params[:id]
  end
  def update
    Disney_characters.find(params[:id]).update(
      name: params[:name],
      debut: params[:debut],
      age: params[:age],
      image: params[:image]
    )
    redirect_to(char_path)
  end
  def delete
    Disney_characters.find(params[:id]).destroy
    redirect_to("/")
  end

end
