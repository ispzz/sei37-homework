# print "What suburb do you live in? "
# suburb = gets.chomp.downcase
#
# if suburb == "bondi"
#   puts "Nice boat shoes"
#
#
# elsif suburb == "newport"
#   puts "Oh, so you're a white supremacist"
#
#
# elsif suburb == "manly"
#   puts "Surfs up bro!"
# elsif suburb == "newtown"
#   puts "Cool piercing"
# else
#   puts "I'm sure its very nice there."
# end


# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.

# number = 7
#
# Random.rand(0..10)
#
# print "Please enter your guess:"
#
# guess = gets.to_i
#
# if guess == number
#   puts "Correct guess"
# elsif guess > number
#   puts "Too high! Guess lower!"
# elsif guess < number
#   puts "Too low! Guess higher!"
# end
#
#
# secret_number = rand(10)
#
# print "Enter your guess: "
# guess = gets.to_i
#
# while guess is not correct... keep asking for another Guess
#
# while guess != secret_number
#   print "Try again! Enter your guess: "
#   guess = gets.to_i
# end # while
#
# puts "Congratulations! You guessed correctly!"
#
# require 'colorize'
#
# Loop
#
# secret_number = rand(10)
#
# guess = -1
#
# until guess == secret_number
#   print "Enter your guess: ".red
#   guess = gets.to_i
#   puts "Try again" if guess != secret_number
# end




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

# menu of operations
# print "Which function would you like to use?: (+,-,*,/, quit): "
# desired_function = gets.chomp.downcase
#
# def add (a, b)
#   result = a + b
#   result
# end
#
# def minus (a, b)
#   result = a - b
#   result
# end
#
# def multiply (a,b)
#   result = a * b
#   result
# end
#
# def divide (a,b)
#   result = a / b
#   result
# end




# puts "num1: "
# num1 = gets.chomp.to_f
#
# print "Which function would you like to use?: (+,-,*,/, quit): "
# op = gets.chomp
#
# puts "num2: "
# num2 = gets.chomp.to_f
#
# if op == "+"
#      puts num1 + num2
# elsif op == "-"
#      puts num1 - num2
# elsif op == "/"
#      puts num1 / num2
# elsif op == "*"
#      puts num1 * num2
# else
#      puts "Thanks for using my calculator!"
# end

# BMI Calculator




def bmi

  print "Enter your weight and height to calculate: "

  weight = gets.chomp.to_f
  height = gets.chomp.to_f

  result = weight / (height * height)
  puts "Your BMI is #{result}"

    # if bmi < 18.5
    #     puts "underweight"
    # elsif bmi >= 18.5 && bmi < 25.0
    #     puts "perfect"
    # elsif bmi >= 25.0 && bmi < 30.0
    #     puts "overweight"
    # else
    #     puts "tubby"
    # end
end
bmi


print "Enter your weight and height to calculate: "
​
weight = gets.chomp.to_f
height = gets.chomp.to_f
​
def bmi(weight, height)
    bmi = weight / (height * height)
    if bmi < 18.5
        puts "underweight"
    elsif bmi >= 18.5 && bmi < 25.0
        puts "perfect"
    elsif bmi >= 25.0 && bmi < 30.0
        puts "overweight"
    else
        puts "Put the snack down"
    end
