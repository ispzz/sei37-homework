$subway_lines = [{ :line => 'N' , :stops => ["Time Square","34th","28th", "23rd","Union Square","8th"]},
                   {:line => 'L', :stops => ["8th","6th", "Union Square","3rd","1st"]},
                   {:line =>  'P', :stops => ["Grand Central","33rd", "28th","23rd","Union Square","Astor Place"]}]

$intersection_point = 'Union Square'
$travel_instruction = 'You must travel through the following stops on the'
$travel_change_over = 'Your journey continues through the following stops:'

#Get the whole stoplist for particular given line.
def get_stop_details(line)
x = $subway_lines
  for i in x do
  if line == i[:line]
line_details = i[:stops]
  end
end
line_details
end

# Get the user stop_list for a particular line.
def get_users_stops_by_line(line,origin_stop,destination_stop)
  # stop_list is an array which is line details
  stop_list = get_stop_details(line)
  origin_stop_index = stop_list.index(origin_stop)
  destination_stop_index = stop_list.index(destination_stop)

  if origin_stop_index < destination_stop_index
 stop_list[origin_stop_index..destination_stop_index]

  else
    stop_list[destination_stop_index..origin_stop_index].reverse()
    end
  end


#Provide Customer Plan details
def plan_trip(origin_line,origin_stop,destination_line,destination_stop)
  if (origin_line === destination_line)
    final_line_stops = get_users_stops_by_line(origin_line,origin_stop,destination_stop)
    puts("#{$travel_instruction} #{origin_line} line: #{final_line_stops}")
    puts("#{final_line_stops.length} stops in total.")
  else
  origin_line_stops  = get_users_stops_by_line(origin_line,origin_stop,$intersection_point)
  destination_line_stops = get_users_stops_by_line(destination_line,$intersection_point,destination_stop)
  puts("#{$travel_instruction} #{origin_line} line: #{origin_line_stops}.")
  puts("Change at #{$intersection_point}.")
  puts("#{$travel_change_over} #{destination_line_stops}.")
  puts("#{origin_line_stops.concat(destination_line_stops).length} stops in total")
  end
end




puts "Welcome to MTA Lab"
plan_trip('P','Astor Place','P','33rd')
puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

puts "Welcome to MTA Lab"
plan_trip('P','33rd','P','Astor Place')
puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

puts "Welcome to MTA Lab"
plan_trip('L','1st','L','8th')
puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

puts "Welcome to MTA Lab"
plan_trip('L','1st','N','Time Square')
puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

puts "Welcome to MTA Lab"
puts ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
plan_trip('N','Time Square','N','Union Square')
