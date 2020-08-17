require 'colorize'

strand1 = 'GAGCCTACTAACGGGAT'
array1 = strand1.split(//)

strand2 = 'CATCGTAATGACGGCCT'
array2 = strand2.split(//)

count = 0

(0...array1.length).each do |i|
  count += 1 if array1[i] != array2[i]
end

puts strand1.yellow
puts strand2.yellow
puts "The Hamming distance of these DNA strands is: #{count}".green
