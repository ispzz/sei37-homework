require 'colorize'

# Arithmetic methods
def addition(number_1, number_2)
  number_1 + number_2
end

def subtraction(number_1, number_2)
  number_1 - number_2
end

def multiplication(number_1, number_2)
  number_1 * number_2
end

def divisions(number_1, number_2)
  number_1 / number_2
end

def exponents(number_1, number_2)
  number_1 ** number_2
end

def square_roots(number_1, number_2)
  number_1 ** number_2
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

  # Enter numbers
  print "Enter numbers you would like to perform (separated by ','): ".green
  # Convert string to array
  numbers = gets.split(',')
  # Get number by array index
  number_1 = numbers[0].to_f
  number_2 = numbers[1].to_f

  # require 'pry'; binding.pry
  # Declare result
  result = 0
  # Check arithmetic methods
  case operation
  when "a"
    result = addition number_1, number_2
  when "s"
    result = subtraction number_1, number_2
  when "m"
    result = multiplication number_1, number_2
  when "d"
    result = divisions number_1, number_2
  when "c"
    result = exponents number_1, number_2
  when "sq"
    result = square_roots number_1, number_2
  end
  
  puts "The answer is #{result}".green

end



