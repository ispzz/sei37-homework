print "Enter a number: "
num = gets.to_i

if num % 3 == 0 || num % 5 == 0 || num % 7 == 0
  if num % 3 == 0
    print "Pling"
  end
  if num % 5 == 0
    print "Plang"
  end
  if num % 7 == 0
    print "Plong"
  end
  puts ""
else
  puts num
end
