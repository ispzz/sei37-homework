require 'colorize'

def enter_two_numbers
  # Enter numbers
  print "Enter numbers you would like to perform (separated by ','): ".green
  # Convert string to array
  gets.split(',')
end

def enter_one_number
  # Enter numbers
  print "Enter number you would like to perform: ".green
  # Convert string to number
  gets.to_f
end

# Arithmetic methods
def addition
  number = enter_two_numbers
  number_1 = number[0].to_f
  number_2 = number[1].to_f
  puts number_1 + number_2
end

def subtraction
  number = enter_two_numbers
  number_1 = number[0].to_f
  number_2 = number[1].to_f
  puts number_1 - number_2
end

def multiplication
  number = enter_two_numbers
  number_1 = number[0].to_f
  number_2 = number[1].to_f
  puts number_1 * number_2
end

def divisions
  number = enter_two_numbers
  number_1 = number[0].to_f
  number_2 = number[1].to_f
  puts number_1 / number_2
end

def exponents
  number = enter_one_number
  puts number ** 2
end

def square_roots
  number = enter_one_number
  puts Math sqrt(number)
end


# Welcome message: enter any button to start or enter "q" to quit
puts "Ruby Calculator".yellow

def menu_message 
  puts "Enter any button to start or Enter 'q' to quit.".yellow
  gets.chomp.downcase
end

# If entered letter doesn't equal to "q", while loop the code
while menu_message != "q"

  # Select arithmetic methods
  print "Would you like to 'a'ddition, 's'ubtraction, 'm'ultiplication, 'd'ivision, 'e'xponents or 'sq'uare roots? Enter the quoted words to start: ".green
  operation = gets.chomp.downcase

  # require 'pry'; binding.pry
  # Declare result
  result = 0
  # Check arithmetic methods
  case operation
  when "a"
    addition
  when "s"
    subtraction
  when "m"
    multiplication
  when "d"
    divisions
  when "c"
    exponents
  when "sq"
    square_roots
  end

end



