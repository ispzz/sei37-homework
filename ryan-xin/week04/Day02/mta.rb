require "Colorize"
# require 'pry'; binding pry

# ---------------------------------- Methods --------------------------------- #

# Check which line is selected
def line_checker(line)
  if line == "n"
    $mta[:line_n]
  elsif line == "l"
    $mta[:line_l]
  elsif line == "6"
    $mta[:line_6]
  end
end # line_checker


# Check if the stop exists
def stop_checker(line, stop)
  # line_checker to check which line it is
  current_line = line_checker(line)
  # Return true if current_line contains the stop
  current_line.include? stop # Returen true or false
end # stop_checker


# Title Case
def title_case(string)
  # split(" ") to array; map & .capitalize to a new array; join(" ") the new array to string
  string.split(" ").map { |word| word.capitalize }.join(" ")
end # title_case


# plan_trip_part method
def plan_trip_part(line, start_stop, end_stop)
  # Call the line_checker method to get the current line
  current_line = line_checker(line)
  # Get the start stop index in the current line
  start_index = current_line.index(start_stop)
  # Get the end stop index in the current line
  end_index = current_line.index(end_stop)
  # From left to right
  if start_index < end_index
    # Return all the trip stops
    current_line[start_index + 1..end_index]
  # From right to left
  elsif start_index > end_index
    # Return all the trip stops
    current_line[end_index..start_index - 1].reverse
  end
end # plan_trip_part


# plan_tirp method
def plan_trip(start_line, start_stop, end_line, end_stop)
  # local variable for first part stops (start_stop to "Union Square")
  line_stops_one = []
  # local variable for second part stops
  line_stops_two = []
  # When travel on the same line
  if start_line == end_line
    # Call plan_trip_part method 
    line_stops_one = plan_trip_part(start_line, start_stop, end_stop)
    # Use join(",") to display all stops on single line
    puts "You must travel through the following stops on #{start_line.upcase} line: #{line_stops_one.join(", ")}.".yellow
  # When travel on different lines
  else
    # Call plan_trip_part method for first part stops (start_stop to "Union Square")
    line_stops_one = plan_trip_part(start_line, start_stop, "Union Square")
    # Use join(",") to display all stops on single line
    puts "You must travel through the following stops on #{start_line.upcase} line: #{line_stops_one.join(", ")}.".yellow
    puts "Change at Union Square.".yellow
    # Call plan_trip_part method for second part stops ("Union Square" to end_stop)
    line_stops_two = plan_trip_part(end_line, "Union Square", end_stop)
    # Use join(",") to display all stops on single line
    puts "Your journey continues through the following stops: #{line_stops_two.join(", ")}.".yellow
  end
  # Total stops equals first part stops length plus second part stops length
  puts "#{line_stops_one.length + line_stops_two.length} stops in total.".yellow
end # plan_trip method


# Menu message to check continue or quit the program
def menu_message
  puts "Enter 's' to start or enter 'q' to quit...".green
  gets.chomp
end # menu_message


# -------------------------------- Line stops -------------------------------- #

# Line stops hash
$mta = {
  :line_n => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  :line_l => ["8th", "6th", "Union Square", "3rd", "1st"],
  :line_6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
} # Line stops hash


# ----------------------------- Starts From Here ----------------------------- #

# Welcome message
puts "Welcome to MTA Lab!".yellow


# If menu_message != 'q' run the code
while menu_message != "q"
  # Enter the start line
  puts "Please enter the line name to select the getting on line:".green
  puts "N Line      L Line      6 Line"
  $start_line = gets.chomp.downcase

  # Enter the start stop
  puts "Please enter the getting on stop:".green
  # Use line-checker to check which line it is and display all stops in one line with join(", ")
  puts line_checker($start_line).join(", ")
  # Convert to Title Case
  $start_stop = title_case(gets.chomp)
  
  # Call stop_checker method to check if the stop exists if not keeps asking
  while !stop_checker($start_line, $start_stop)
    puts "The stop doesn't exist please enter again:".red
    # Convert to Title Case
    $start_stop = title_case(gets.chomp)
  end

  # Enter the end line
  puts "Please enter the line name to select the getting off line:".green
  puts "N Line      L Line      6 Line"
  $end_line = gets.chomp.downcase

  # Enter the end stop
  puts "Please enter the getting off stop:".green
  # Use line-checker to check which line it is and display all stops in one line with join(", ")
  puts line_checker($end_line).join(", ")
  # Convert to Title Case
  $end_stop = title_case(gets.chomp)

  # Call stop_checker method to check if the stop exists if not keeps asking
  while !stop_checker($end_line, $end_stop)
    puts "The stop doesn't exist please enter again:".red
    # Convert to Title Case
    $end_stop = title_case(gets.chomp)
  end
  
  # Call plan_trip method
  plan_trip($start_line, $start_stop, $end_line, $end_stop)

end # end program

# ------------------------------------ End ----------------------------------- #

# require 'pry'; binding pry
