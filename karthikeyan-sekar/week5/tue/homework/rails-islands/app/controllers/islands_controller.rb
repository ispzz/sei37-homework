class IslandsController < ApplicationController

skip_before_action :verify_authenticity_token, raise: false

def new
end

def create
  Island.create(
    name: params[:name],
    image: params[:image],
    population: params[:population],
    area: params[:area],
    currency: params[:currency]
  )

  redirect_to(islands_path)
end
def index
  @islands = Island.all
end
def show
@island = Island.find params[:id]
end
def edit
@island = Island.find params[:id]
end
def update
  island = Island.find params[:id]
  island.update(
    name: params[:name],
    image: params[:image],
    population: params[:population],
    area: params[:area],
    currency: params[:currency]
  )

  redirect_to(island_path(params[:id]))
end
def destroy
  Island.destroy params[:id]
  redirect_to(islands_path)

end
end
