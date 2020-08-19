require 'sinatra'
require 'sinatra/reloader'

get "/" do
  erb :intro
end

# get "/calc/:first/:op/:second" do
#
#   @first = params[:op].to_f
#
#   if @op == '+'
#     @result = @first + @second
#   elsif @op == '-'
#     @result = @first - @second
#   elsif @op == '*'
#   @result = @first * @second
# elsif @op == 'div'
#   @result = @first / @second
# end

get "/calc" do
  erb :form
end
