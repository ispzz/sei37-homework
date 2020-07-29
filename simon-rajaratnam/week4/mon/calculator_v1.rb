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


# Version 1

selection = 1

until selection == "q"

  puts ""
  puts "......   CALCULATOR   ......."
  puts ""
  puts "  Calculation Types"
  puts "   1.  addition"
  puts "   2.  subtraction"
  puts "   3.  multiplication"
  puts "   4.  division"
  puts ""
  print "Choose calculation by number, or type 'q' to quit : "

  selection = gets.chomp

  if selection == "q"
    break
  end # end if

    print "Enter the first value : "
    firstVal = gets.to_f

    print "Enter the second value : "
    secondVal = gets.to_f

    case selection
    when "1"
      result = firstVal + secondVal
    when "2"
      result = firstVal - secondVal
    when "3"
      result = firstVal * secondVal
    when "4"
      result = firstVal / secondVal
    when "q"
      break
    end # end case

    puts "The result is : #{result}"

end# end until.
