def menu
  # Clear the screen, and present the user with a menu
  puts `clear`
  puts "MTA 1.0"
  puts "Press enter to continue..."
  gets
end

def stops

puts "What train would you like to get on:"
puts "Line (L), line (N) or line (6) ?"
line_on = gets.chomp.upcase

  case line_on
    when "L"
      puts "Which stop are you getting on?"
      puts "stop(1): Times Square"
      puts "stop(2): 34th"
      puts "stop(3): 28th"
      puts "stop(4): 23rd"
      puts "stop(5): Union Square"
      puts "stop(6): 8th"
      stop_on = gets.chomp

    when "N"
      puts "Which stop are you getting on?"
      puts "stop(1): 8th"
      puts "stop(2): 6th"
      puts "stop(3): Union Square"
      puts "stop(4): 3rd"
      puts "stop(5): 1st"
      stop_on = gets.chomp

    when "6"
      puts "Which stop are you getting on?"
      puts "stop(1): Grand Central"
      puts "stop(2): 33rd"
      puts "stop(3): 28th"
      puts "stop(4): 23rd"
      puts "stop(5): Union Square"
      puts "stop(6): Astor Place"
      stop_on = gets.chomp
    else puts "Invalid input"
    end

    puts "What train would you like to get off:"
    puts "Line (L), line (N) or line (6) ?"
    line_off = gets.chomp.upcase

  case line_off
  when "L"
      puts "Which stop are you getting on?"
      puts "stop(1): Times Square"
      puts "stop(2): 34th"
      puts "stop(3): 28th"
      puts "stop(4): 23rd"
      puts "stop(5): Union Square"
      puts "stop(6): 8th"
      stop_off = gets.chomp

    when "N"
      puts "Which stop are you getting on?"
      puts "stop(1): 8th"
      puts "stop(2): 6th"
      puts "stop(3): Union Square"
      puts "stop(4): 3rd"
      puts "stop(5): 1st"
      stop_off = gets.chomp

    when "6"
      puts "Which stop are you getting on?"
      puts "stop(1): Grand Central"
      puts "stop(2): 33rd"
      puts "stop(3): 28th"
      puts "stop(4): 23rd"
      puts "stop(5): Union Square"
      puts "stop(6): Astor Place"
      stop_off = gets.chomp
    else puts "Invalid input"
  end

if line_on == line_off
  stop_total = (stop_off.to_i - stop_on.to_i).abs
  puts "Your number of stops is #{stop_total}"
end

end

menu

line_l = { times_square: 1, st34: 2,st28: 3,st23: 4,union_square: 5,st8: 6}
line_n = { st8: 1, st6: 2, union_square: 3, st3: 4, st1: 5 }
line_6 = { grand_central: 1, st33: 2, st28: 3, st23: 4, union_square: 5, astor_place: 6 }

stops
