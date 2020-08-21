class CompaniesController < ApplicationController
  def new
    @company = Company.new
  end

  def create
    Company.create company_params
    redirect_to companies_path
  end

  def index
    @companies = Company.all
  end

  def show
    @company = Company.find params[:id]
  end

  def edit
    @company =  Company.find params[:id]
  end

  def update
  end

  def destroy
  end
end
