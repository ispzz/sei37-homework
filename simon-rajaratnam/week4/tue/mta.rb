#######                  Ruby MTA
require 'colorize'

def get_route(line, start, stop)
# stop = "Union Square" if stop == nil
  mta = {
    :n => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    :l => ['8th', '6th', 'Union Square', '3rd', '1st'],
    "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  }

  start_index = mta[line].index(start) # get index of station
  stop_index = mta[line].index(stop)
  if start_index < stop_index # direction are we traveling
    route = mta[line][start_index..stop_index]
  else
    route = mta[line][stop_index..start_index].reverse
  end # end if
end # end get_route


def trip_plan(start_line, start_station, end_line, end_station)
  if start_line == end_line
    route = get_route(start_line,start_station,end_station)
    
    puts "You must travel through the following stops on the #{start_line} line:"
    puts route.join(", ").green
    print "The journey will take "
    print "#{route.length} stops ".green
    puts "in total."

  else
    first_route = get_route(start_line, start_station, "Union Square")
    second_route = get_route(end_line, "Union Square", end_station)

    puts "You must first travel through the following stops on the #{start_line} line:"
    print first_route.join(", ").green
    puts ".".green
    puts "Change at Union Square, then continue through the following stops:"
    print second_route.join(", ").green
    puts ".".green
    print "The journey will take "
    print "#{first_route.length+second_route.length} stops ".green
    puts "in total."
  end # end if

end # end trip_plan

puts""
trip_plan( :n,"Union Square", :n,"Times Square")
puts ""
trip_plan(:n,"Times Square", :l,"8th")
puts""
trip_plan( "6","Grand Central", :n,"Times Square")
