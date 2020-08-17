class DucksController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false

  def index
    @ducks = Duck.all
  end

  def show
    @duck = Duck.find params[:id]
  end

  def new
  end

  def create
    Duck.create(
      name: params[:name],
      rotundness: params[:rotundness],
      overview: params[:overview],
      image: params[:image],
    )

    redirect_to(ducks_path)
  end

  def edit
    @duck = Duck.find params[:id]
  end

  def update
    duck = Duck.find params[:id]

    duck.update(
      name: params[:name],
      rotundness: params[:rotundness],
      overview: params[:overview],
      image: params[:image],
    )

    redirect_to(duck_path(duck.id))
  end

  def destroy
    Duck.destroy params[:id]
    redirect_to(ducks_path)
  end

end
