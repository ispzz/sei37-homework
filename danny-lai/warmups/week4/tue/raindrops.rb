# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
  # If the number contains 3 as a factor, output 'Pling'.
  # If the number contains 5 as a factor, output 'Plang'.
  # If the number contains 7 as a factor, output 'Plong'.
  # If the number does not contain 3, 5, or 7 as a factor, output the number as a string.

# Examples
  # 28 has 7 as a factor.
  # In raindrop-speak, this would be a simple "Plong".
  # 1755 has 3 and 5 as factors.
  # In raindrop-speak, this would be a "PlingPlang".
  # 34 has neither 3, 5 nor 7 as a factor.
  # Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".

require 'colorize'

def calculation
  string = ""
  print "Enter a number: ".yellow
  number = gets.to_i
  if number % 3 == 0
    string += "Pling".light_red
  end #if
  if number % 5 == 0
    string += "Plang".light_blue
  end #if
  if number % 7 == 0
    string += "Plong".magenta
  end #if
  if number % 3 != 0 && number % 5 != 0 && number % 7 != 0
    string += "#{number}"
  end #if
  puts string
end #end of pling_plang_plong

string = 1
while string == 1
  calculation
  print "Enter 1 to continue, or 0 to exit: "
  string = gets.to_i
end
