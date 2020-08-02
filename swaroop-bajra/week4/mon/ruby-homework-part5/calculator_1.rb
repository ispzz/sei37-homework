require 'colorize'

puts "CALCULATOR MENU".red
puts "1. Add".blue
puts "2. Subtract".blue
puts "3. Multiply".blue
puts "4. Divide".blue
puts "Enter Selection"
user_selection = gets.to_i

case user_selection
when 1 then puts "You selected Addition"
  print "Enter first Number "
  first_user_entry = gets.to_f

  print "Enter second Number "
  second_user_entry = gets.to_f

  print "The sum of the two numbers is:"
  add(first_user_entry, second_user_entry)
end #case

def add(first, second)
  first + second
end

def subtract(first, second)
  first - second
end

def multiply(first, second)
  first * second
end

def divide(first, second)
  first / second
end
