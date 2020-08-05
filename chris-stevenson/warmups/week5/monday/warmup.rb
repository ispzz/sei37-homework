# ## Simple Sums - Ruby
# Write a program that can calculate the sum of the first n elements of the following sequences:
# ```
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
# ```
# For example:
# ```
# s1(4) = 0
# s2(4) = 10
# ```
# Can you guess what the sum would be if n is infinity?


# s1
def s1(n)
  if n.even? then 0
  else 1 end
end

puts s1(3)
puts s1(4)
puts ''

def s2(n)
  count = 0
  total = 0
  n.times do
    count +=1
    total = total + count
  end
  total
end

puts s2(5)
