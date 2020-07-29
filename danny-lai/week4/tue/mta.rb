
require 'colorize'

def trip_information

  print "Please select your line (n/l/s): ".light_blue
  line = gets.chomp.to_sym

  print "What station would you like to get on at?: ".light_blue
  first_stop = gets.chomp

  print "What station would you like to get off at?: ".light_blue
  last_stop = gets.chomp

  mta = {
    :n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    :l => ["8th", "6th", "Union Square", "3rd", "1st"],
    :s => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  first_index = mta[line].index first_stop
  last_index = mta[line].index last_stop

  if first_index < last_index
    trip = mta[line][first_index .. last_index]
    puts "Your journey will consist of the following stops: #{trip.join(", ")} (commencing at #{first_stop} and terminating at #{last_stop}). There will be #{trip.length - 1} stops in total.".light_green
  end

  if first_index > last_index
    trip = mta[line][last_index .. first_index]
    reverse_trip = trip.reverse
   puts "Your trip will consist of the following stops: #{reverse_trip.join(", ")} (starting at #{first_stop} and ending at #{last_stop}). There will be #{reverse_trip.length - 1} stops in total.".light_magenta
  end

end

# trip_information :n, "Times Square", "8th"

while true
  trip_information
end

# require 'pry'; binding.pry
