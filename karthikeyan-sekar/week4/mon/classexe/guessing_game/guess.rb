# com_number = Random.rand(10)
# puts com_number
# puts "please guess a number"
# user_number = gets.to_i
# if user_number == com_number
#   puts "Congradulations!! the guessed number is correct"
# else puts "the guessed number is wrong"
# end

require 'colorize'
secret_number = rand(10)

guess = -1

while guess != secret_number
  print "enter your guess:"
  guess = gets.to_i
  puts "Try again"
end
puts "Congradulations! you guessed correctly".green
