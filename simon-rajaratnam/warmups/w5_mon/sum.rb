## Simple Sums - Ruby
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

def sum_s1 num
  i=1
  while i <= num
    case i
    when i.odd? then i = i - 1
    when i.even? then i = i + 1
    end # end case
  end # end while

  puts i
end

def testCase i
  case i
  when i.odd? then i= i - 1
  when i.even? then i=i+1
  end
  puts i
end

# Zara's solution.

def s1 (number)
  number %2
end

def s2 (number)
  (1..number).sum
end
