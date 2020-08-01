require 'colorize'
def menu
  puts "CALCULATOR MENU".red
  puts "1. Add".yellow
  puts "2. Subtract".yellow
  puts "3. Multiply".yellow
  puts "4. Divide".yellow
  puts "5. Exit".yellow
  puts "Enter Selection"
end

menu()
user_selection = gets.to_i

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

def get_input
  print "Enter first Number "
  first_user_entry = gets.to_f

  print "Enter second Number "
  second_user_entry = gets.to_f

end

until user_selection == 5

    case user_selection

    when 1 then puts "You selected Addition"
      print "Enter first Number "
      first_user_entry = gets.to_f

      print "Enter second Number "
      second_user_entry = gets.to_f

      result = add(first_user_entry, second_user_entry)
      puts "The sum of the two numbers is: #{result}"

      puts menu()

    when 2 then puts "You selected Subtraction"
      print "Enter first Number "
      first_user_entry = gets.to_f

      print "Enter second Number "
      second_user_entry = gets.to_f

      result = subtract(first_user_entry, second_user_entry)
      puts "The subtraction of the two numbers is: #{result}"
      puts menu()



    when 3 then puts "You selected Multiplication"
      print "Enter first Number "
      first_user_entry = gets.to_f

      print "Enter second Number "
      second_user_entry = gets.to_f

      result = multiply(first_user_entry, second_user_entry)
      puts "The multiplication of the two numbers is: #{result}"
      puts menu()



    when 4 then puts "You selected Division"
      print "Enter first Number "
      first_user_entry = gets.to_f

      print "Enter second Number "
      second_user_entry = gets.to_f

      result = divide(first_user_entry, second_user_entry)
      puts "The division of the two numbers is: #{result}"
      puts menu()



    end # case end

end # until end
