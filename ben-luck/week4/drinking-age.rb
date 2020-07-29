print "Please enter your age:"
age = gets.to_i

p age

# puts "Age is #{age}"

if age < 18
  puts "Go drink some cordial in the sandpit kid!"
else
  puts "Come on in and enjoy the liver damage"
end

### Aircon

print "Enter current temp:"
current_temp = gets.to_f

print "Is the A/C functioning?: (y/n): "
ac_working = gets.chomp.downcase

print "What is the desired temp?: "
disired_temp = temp.to_f

p current_temp, ac_working, disired_temp
