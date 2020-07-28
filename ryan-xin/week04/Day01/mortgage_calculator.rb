require 'colorize'

puts "Mortgage Calsulator"

print "How much would you like to borrow($): ".yellow
p = gets.to_f

print "How many years would you like to repay your mortgage: ".yellow
n = gets.to_i * 12

print "Please enter your interst rate(%): ".yellow
i = gets.to_f / 12 / 100

mortgage = 0
mortgage = (p * ((i * (1 + i) * n) / ((1 + i) * n - 1))).ceil(2)
puts "Your monthly repayment will be $#{mortgage}.".green