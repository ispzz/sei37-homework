# "we want to use the sinatra gem in the following code"
# ...similar to loading JS files using <script src=""> tags
require 'sinatra'
require 'sinatra/reloader'

get "/" do

 "<h1>sinatra intro webserver! hehehe</h1>"

end

get "/luckynumber" do
  @num = rand 100

#puts "The random number is #{num}"
  # "your lucky number is #{num}"
  erb :lucky
end

get"/uptime" do
  output = `uptime`
  "System uptime : #{output}"
end

get "/hello/:student" do
  hello_recipient = params[:student]
  "Hello, #{hello_recipient}"
end

get "/hello/:student/:mood" do
  hello_recipient = params[:student]
  "Hello, #{hello_recipient}"
end
