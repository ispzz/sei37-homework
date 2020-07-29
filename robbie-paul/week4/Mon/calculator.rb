# # Calculator

# ### Explanation
# - You will be building a calculator.  A calculator can perform multiple arithmetic operations.  Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
#
# ### Specification:
# - A user should be given a menu of operations


# add_output = first_number + second_number

puts "Hello, welcome to the calculator. I can add, subtract, multiply and divide. Type each of these words to select the option."

if "add" 
    puts "What is the first number?"
    first_number = gets.to_f
    puts "What is the number you would like to multiply by?"
    second_number = gets.to_f
    add_output = first_number + second_number
    add_output = first_number + second_number

    puts "The answer is: #{add_output}"

elsif "subtract" 
    puts "What is the first number?"
    first_number = gets.to_f
    puts "What is the number you would like to multiply by?"
    second_number = gets.to_f
    subtract_output = first_number - second_number
    subtract_output = first_number - second_number

    puts "The answer is: #{subtract_output}"
    
elsif "multiply" 
    puts "What is the first number?"
    first_number = gets.to_f
    puts "What is the number you would like to multiply by?"
    second_number = gets.to_f
    multiply_output = first_number * second_number
    multiply_output = first_number * second_number
    
    puts "The answer is: #{multiply_output}"
 
elsif "subtract" 
        puts "What is the first number?"
        first_number = gets.to_f
        puts "What is the number you would like to multiply by?"
        second_number = gets.to_f
        subtract_output = first_number - second_number
        subtract_output = first_number - second_number
        
        puts "The answer is: #{subtract_output}"
end    


# - A user should be able to choose from the menu
# - A user should be able to enter numbers to perform the operation on
# - A user should be shown the result
# - This process should continue until the user selects a quit option from the menu

# #### Phase 1
# - Calculator functionality
# - Calculator should be able to do basic arithmetic (+,-, *, /)
#
# #### Phase 2
# - Advanced Calculator functionality
# - Calculator should be able to do basic arithmetic (exponents, square roots)
#

# # Bonus
# ## Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# ## BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# ## Trip Calculator
# Calculate a trip time and cost given inputs for
# - distance
# - miles per gallon
# - price per gallon
# - speed in miles per hour
# Collapse