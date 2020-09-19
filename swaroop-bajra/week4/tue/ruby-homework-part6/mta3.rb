mta = {
  "n" => ['times','34th','28n','23n','union','8th'],
  "l" => ['8av','6av','union','3av','1av'],
  "s" => ['gc','33rd','28s','23s','union','astor']
  }

puts "What station are you leaving from?"
start = gets.chomp

puts "What line is that on?"
startline = gets.chomp

puts "What station would you like to go to?"
finish = gets.chomp

puts "What line is that on?"
endline = gets.chomp

if startline == endline
  print mta[startline].index(finish) - mta[startline].index(start)
else
  leg1 = (mta[startline].index(start) - mta[startline].index('union')).abs
  leg2 = (mta[endline].index(finish) - mta[startline].index('union')).abs
  total = leg1 + leg2
  print total
end
