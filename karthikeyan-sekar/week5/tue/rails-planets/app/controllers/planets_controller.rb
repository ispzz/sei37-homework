class PlanetsController < ApplicationController

skip_before_action :verify_authenticity_token, raise: false

def new
end

def create
  Planet.create(
    name: params[:name],
    orbit: params[:orbit],
    diameter: params[:diameter],
    mass: params[:mass],
    moons: params[:moons],
    image: params[:image]
  )

  redirect_to(planets_path)
end

def index
  @planets = Planet.all
end
def show
@planet = Planet.find params[:id]
end
def edit
@planet = Planet.find params[:id]
end
def update
  planet = Planet.find params[:id]
  planet.update(
    name: params[:name],
    orbit: params[:orbit],
    diameter: params[:diameter],
    mass: params[:mass],
    moons: params[:moons],
    image: params[:image]
  )

  redirect_to(planet_path(params[:id]))
end
def destroy
  Planet.destroy params[:id]
  redirect_to(planets_path)

end
end
