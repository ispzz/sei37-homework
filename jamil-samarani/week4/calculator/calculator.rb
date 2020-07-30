# Calculator


# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.

# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)

calc_function = 0

unless calc_function == "quit"

  print "Please choose your calculator function ( +, -, *, /, ) or type quit to exit:"
  calc_function = gets.chomp
  if
  print "input first number:"
  val_one = gets.to_f
  print "input second number:"
  val_two = gets.to_f

  if calc_function == "+"
    puts "The answer is #{[val_one + val_two]}"

  elsif calc_function == "-"
    puts "The answer is #{[val_one - val_two]}"

  elsif calc_function == "*"
    puts "The answer is #{[val_one * val_two]}"

  elsif calc_function == "/"
    puts "The answer is #{[val_one / val_two]}"

  else
    puts "error"
  end
end
end
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)






# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#






# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#






# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
