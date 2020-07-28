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
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)

require 'colorize'

def calculation_type
  print "Please select one of the following options (1-4):
    \n 1. Addition
    \n 2. Subtraction
    \n 3. Multiplication
    \n 4. Division\n\n".yellow

  menu_choice = gets.to_i

  if menu_choice == 1
    return "addition"
  elsif menu_choice == 2
    return "subtraction"
  elsif menu_choice == 3
    return "multiplication"
  elsif menu_choice == 4
    return "division"
  else
    return "error"
  end #end of conditional
end #end of calculation_type

def calculate(calculation_type, x, y)
  if calculation_type == "addition"
    x + y
  elsif calculation_type == "subtraction"
    x - y
  elsif calculation_type == "multiplication"
    x * y
  elsif calculation_type == "division"
    x.to_f / y.to_f
  end #end of conditional
end #end of calculate

run_calculator = 0

while run_calculator == 0
  current_calculation = calculation_type()
  if current_calculation == "error"
    puts "Invalid option. Please try again.\n".red
  else
    puts "Please enter the first number: ".green
    first_number = gets.to_i
    puts "Please enter the second number: ".green
    second_number = gets.to_i

    result = calculate(current_calculation, first_number, second_number)

    puts "The answer is #{result}."
    puts "Type 0 to return to the menu, or 1 to exit the calculator: ".green
    run_calculator = gets.to_i
  end #end of conditional
end #end of while run_calculator
