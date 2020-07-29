require 'colorize'

def welcome_message
  puts "Enter 's' to start and enter 'q' to quit."
  gets.chomp
end

puts "Welcome to Trip Calculator"

while welcome_message != "q"
  print "Plese enter the distance(miles): "
  distance = gets.to_f

  print "How many miles per gallon: "
  miles_per_gallon = gets.to_f

  print "How much per gallon($): "
  price_per_gallon = gets.to_f

  print "What is the speed in miles per hour: "
  speed = gets.to_f

  trip_time = (distance / speed).ceil(2)
  puts "Your tirp time is #{trip_time} hours.".green

  trip_cost = (distance / miles_per_gallon) * price_per_gallon
  puts "Your trip cost is $#{trip_cost}.".green

end
