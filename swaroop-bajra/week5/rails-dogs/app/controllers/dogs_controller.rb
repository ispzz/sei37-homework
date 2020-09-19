class DogsController < ApplicationController
skip_before_action :verify_authenticity_token, raise: false

  # CREATE ####################################

  # 1. New Blank Form

    def new
    end # new

  # 2. Form submits to here, AR create, redirect

    def create

      Dog.create(
        name: params[:name],
        breed: params[:breed],
        age: params[:age],
        description: params[:description],
        image: params[:image]
      )
      redirect_to(dogs_path)
    end

  # READ #######################################

  # 1. Index page, i.e. list every row of the 'dogs' tables

    def index
      @dogs = Dog.all
    end # index

  # 2. Show page, i.e. details about one row (one planet) by ID

    def show
      @dog = Dog.find params[:id]
    end # show

  # UPDATE ######################################

  # 1. Pre-populated edit form (which also requires a find by ID)

    def edit
      @dog = Dog.find params[:id]
    end # edit

  # 2. Edit form submits to here, AR update, redirect

    def update
      dog = Dog.find params[:id]

      dog.update(
        name: params[:name],
        breed: params[:breed],
        age: params[:age],
        description: params[:description],
        image: params[:image]
      )
      redirect_to(dog_path(params[:id]))
    end # update

  # DELETE #######################################

  # Find a row by id and delete

    def destroy
      Dog.destroy params[:id]
      redirect_to( dogs_path )
    end # destroy
    
end # PlanetsController
