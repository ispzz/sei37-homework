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
require 'colorize'

def calculator
    selection = 1

    until selection == "q"

      puts ""
      puts "......   CALCULATOR   ......."
      puts ""
      puts "            Calculation Types"
      puts "   1.  addition           5.  exponent"
      puts "   2.  subtraction        6.  square root"
      puts "   3.  multiplication     7.  mortgage repayments"
      puts "   4.  division"
      puts ""
      print "Choose calculation by number, or type 'q' to quit : "

      selection = gets.chomp

      case selection
      when "1"
        addition
      when "2"
        subtraction
      when "3"
        multiplication
      when "4"
        division
      when "5"
        exponent
      when "6"
        square_root
      when "7"
        mortgage
      end # end case

    end# end until.
end # end calculator

def addition
  print "Enter first value : "
  firstVal = gets.to_f
  print "Enter second value : "
  secondVal = gets.to_f
  result = firstVal + secondVal
  puts "#{firstVal} + #{secondVal} = #{result}".green
end

def subtraction
  print "Enter first value : "
  firstVal = gets.to_f
  print "Enter second value : "
  secondVal = gets.to_f
  result = firstVal - secondVal
  puts "#{firstVal} - #{secondVal} = #{result}".green
end

def multiplication
  print "Enter first value : "
  firstVal = gets.to_f
  print "Enter second value : "
  secondVal = gets.to_f
  result = firstVal * secondVal
  puts "#{firstVal} x #{secondVal} = #{result}".green
end

def division
  print "Enter first value : "
  firstVal = gets.to_f
  print "Enter second value : "
  secondVal = gets.to_f
  result = firstVal / secondVal
  puts "#{firstVal} / #{secondVal} = #{result}".green
end

def exponent
  print "Enter value : "
  value = gets.to_f
  print "Enter power value : "
  powVal = gets.to_f
  result = value**powVal
  puts "#{value} ** #{powVal} = #{result}".green
end

def square_root
  print "Enter value : "
  value = gets.to_f
  result = value**2
  puts "#{value} ** 2 = #{result}".green
end

def mortgage
  print "Enter loan amount (principle) : "
  p = gets.to_f
  print "Enter the years to pay back the loan (loan term) : "
  term = gets.to_f
  n = term * 12 #n is number of monthly repayments
  print "Enter the annual interest rate : "
  interest = gets.to_f
  r = interest/12 #r is monthly interest rate

  # monthlyAmount = (r*p)/(1-((1+r)**(-n)))
  monthlyAmount = p*((r*((1+r)**n))/(((1+r)**n)-1))
  puts "Monthly payments = $#{monthlyAmount}".green
end




calculator
