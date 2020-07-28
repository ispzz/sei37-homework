mta_lines = {
  :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
  :SIX => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

# Functino to return a train line from user input
def get_line
  start_line = gets.chomp.upcase
  if start_line == 'N' || start_line == 'L' || start_line == '6'
    if start_line == 'N' then :N
    elsif start_line == 'L' then :L
    elsif start_line == '6' then :SIX
    end
  else
    puts "Please try again with a valid train line."
  end
end # get_line end


# Function to get station from train line
def get_station(line)
  puts "And at which station?"
  mta_lines = {
    :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
    :SIX => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
  mta_lines[line].each_with_index do |value, index|
    print "#{index+1}. "
    puts value
  end
  station_index = gets.to_i - 1
  if mta_lines[line].include? mta_lines[line][station_index]
    station_index
  else
    puts "This is not a valid station. Please try again."
  end
end #get_station end

print "What line will you be boarding? (N, L, 6): "
start_line = get_line
start_station = get_station(start_line)
print "What line will you be departing? (N, L, 6): "
finish_line = get_line
finish_station = get_station(finish_line)
stop_over1 = mta_lines[start_line].index("Union Square")
stop_over2 = mta_lines[finish_line].index("Union Square")

def plan_trip(s_line, s_station, f_line, f_station, stop_over1, stop_over2)

  if s_line == f_line
    travel(s_station, f_station)
  else
    travel(s_station, stop_over1)
    puts "Change to your destination line"
    travel(stop_over2, f_station)
  end
  puts "You have arrived at your destination"
end #end of plan_trip

def travel(start, stop)
  print "You must pass #{(start - stop).abs} stations "
  if start < stop
    puts "travelling forwards"
  else
    puts "travelling backwards"
  end
end

plan_trip(start_line, start_station, finish_line, finish_station, stop_over1, stop_over2)
