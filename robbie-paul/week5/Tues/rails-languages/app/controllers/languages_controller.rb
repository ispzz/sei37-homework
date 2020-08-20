class LanguagesController < ApplicationController

    skip_before_action :verify_authenticity_token, raise: false

    # CREATE #########################################
    # 1. Show blank form
    def new
    end 

    # 2. Form submits to here
    def create
        Language.create(
            name:       params[:name],
            family:      params[:family],
            difficulty:   params[:difficulty],
            countries:       params[:countries]
        )

        # Create actions have no template of their own (partly to avoid accidental resubmission of form data; instead we redirect to '/language' using the path helper
        redirect_to( languages_path )

    end #create
   
    #READ 

    # 1. Index Page

    def index
        @languages = Language.all
    end # index

    # 2 Show/details page for a single item , looked up by its ID.
    # The route files sas "get languages/:id" , so we can find the specific ID inside params, with that key: params[:id]

    def show
        @language = Language.find params[:id]
    end

    # UPDATE #########################

    # 1 . Show pre-filled form
    def edit
        @language = Language.find params[:id]

    end
    
    # 2. form submits to here
    def update
        language = Language.find params[:id]
        
        language.update(
            name:           params[:name],
            family:         params[:family],
            difficulty:     params[:difficulty],
            countries:      params[:countries]
        )

        redirect_to( language_path(params[:id]) )
    end

    # DESTROY

    # find a row by id and delete it

    def language
        Language.language params[:id]
        redirect_to(languages_path) #nno template, reidrect to 
    end #destroy
    
end #language controller
