def s1 (number)
    number % 2
end
def s2 (number)
    (1..number).sum
end

puts s1(4)
puts s2(4)

#################################
# SWAROOP'S ANSWER!
s1 = 1
sum1 = 0
sum2 = 0

print "Enter n: "
n = gets.to_i

n.times do |i|
  if i.even?
    sum1 += s1
  else
    sum1 -= s1
  end
end

puts "#{sum1}"

print "Enter m:"
m = gets.to_i

m.times do |i|
 sum2 += i + 1
end

puts"#{sum2}"