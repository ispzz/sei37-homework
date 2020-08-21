# MTA Lab
# Activity:
# Students should create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints:
#
# the stations the user must pass through, in order
# where to change lines, if necessary
# the total number of stops for the trip.
# There are 3 subway lines:
#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points.
# For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
# We should be able to say:
#
# plan_trip( :n, "Times Square", :l, "1st" )
# # Or something along those lines
# Hints:
# Don't worry about user input initially: get it working with hardcoded values first, and wire up the user interface once that's working
# Scope works in a different way in Ruby, so variables that you define outside won't be accessible in a method. Maybe think about using a function to return data. Or perhaps research other types of variables
# A symbol can't just be a number!
# Consider diagraming the lines by sketching out the subway lines and their stops and intersection.
# Make subway lines keys in a hash, while the values are an array of all the stops on each line.
# The key to the lab is to find the intersection of the lines at Union Square.
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)


lines = {
  :n_line => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :l_line => ["8th", "6th", "Union Square", "3rd", "1st"],
  :line_6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def trip_planner(start_line, start, stop_line, stop)
  if start_line.to_sym == stop_line.to_sym

    # Get Index
    start_station = $lines[start_line.to_sym].index(start)
    stop_station = $lines[start_line.to_sym].index(stop)

    # Stops
    arr_of_stations = $lines[start_line.to_sym][start_station..stop_station]

    # Output
    puts "You'll take the #{start_line.to_sym} and there are #{arr_of_stations.size} stops."
    puts "Stops: #{arr_of_stations.flatten.join(", ")}."
  else
    puts "*" *60

    # Get Index
    start_station = $lines[start_line.to_sym].index(start)
    stop_at_union_station = $lines[start_line.to_sym].index("Union Square")

    # Stops
    arr_of_stations1 = $lines[start_line.to_sym][start_station..stop_at_union_station]

    # Get Index
    start_at_union_station = $lines[stop_line.to_sym].index("Union Square")
    stop_station = $lines[stop_line.to_sym].index(stop)

    # Stops
    arr_of_stations2 = $lines[stop_line.to_sym][start_at_union_station..stop_station]

    #Output
    puts "First, you'll take the #{start_line.to_sym} and there are #{arr_of_stations1.size} stops."
    puts "Stops: #{arr_of_stations1.flatten.join(", ")}."
    puts "Then, you'll take the #{stop_line.to_sym} and there are #{arr_of_stations2.size} stops."
    puts "Stops: #{arr_of_stations2.flatten.join(", ")}."

  end
end

trip_planner("n_line", "Times Square", "n_line", "8th")
trip_planner("n_line", "Times Square", "l_line", "1st")
trip_planner("n_line", "Times Square", "line_6", "Astor Place")
