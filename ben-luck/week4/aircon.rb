print "Enter current temp:"
current_temp = gets.to_f

print "Is the A/C functioning?: (y/n): "
ac_working = gets.chomp.downcase

print "What is the desired temp?: "
disired_temp = gets.to_f

# p current_temp, ac_working, disired_temp

if ac_working == "y"
  # AC is working
  if current_temp > desired_temp
    puts "Tun on the A/C please"
  end # temp check


else
  # AC broken
  if current_temp > desired_temp
    puts "Fix the AC now! It's hot"
  else
    put "Fix the A/C whenever you have the chance, its cool"
  end

end
