class DogsController < ApplicationController
skip_before_action :verify_authenticity_token, raise: false

  # CREATE ####################################

  # 1. New Blank Form

  # 2. Form submits to here, AR create, redirect

  # READ #######################################

  # 1. Index page, i.e. list every row of the 'dogs' tables
    def index
      @dogs = Dog.all
    end # index


  # 2. Show page, i.e. details about one row (one planet) by ID

  # UPDATE ######################################

  # 1. Pre-populated edit form (which also requires a find by ID)

  # 2. Edit form submits to here, AR update, redirect

  # DELETE #######################################

  # Find a row by id and delete
end # PlanetsController
