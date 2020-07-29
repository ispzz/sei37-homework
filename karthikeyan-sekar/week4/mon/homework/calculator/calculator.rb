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

def pow(a,b)
  power=1
  for i in 1..b
    power=power*a
  end
  return power
end

puts "Please Enter the Mathematic Operations you would like to perform"
puts "1.Addition 2.Subtraction 3.Multiplication 4.Division 5.Squareroots 6.Exponent"
choice = gets.to_i

if choice == 1..5
puts "Enter the two numbers to be operated"
num1 = gets.to_i
num2 = gets.to_i
end

case choice
when 1 then
  ans = num1 + num2
when 2 then
  ans = num1 - num2
when 3 then
  ans = num1 * num2
when 4 then
  ans = num1 / num2
when 5 then
  ans = Math.sqrt(num1)
when 6 then
  puts "Enter Base:-"
  base=gets.chomp.to_i

  puts "Enter exponent:-"
  expo=gets.chomp.to_i
end
if choice == 6
  puts "The power is #{pow(base,expo)}"
else
  puts "The answer is #{ans}"
end



# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)



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
