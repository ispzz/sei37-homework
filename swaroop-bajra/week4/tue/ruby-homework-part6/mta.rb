subway_lines = {
  :n => ["ts", "34th", "28n", "23n" "union", "8th"],
  :l => ["8th","6th","union", "3rd", "1st"],
  :s => ["gc", "33rd", "28s", "23s", "union", "ap"]
}
#p subway_lines[:n][0]
#p subway_lines[:n].each {|n| puts n}

puts "Enter starting line: "
startline = gets.chomp.downcase

puts "Enter starting station: "
start_station = gets.chomp.downcase

puts "Enter ending line: "
endline = gets.chomp.downcase

puts "Enter ending station: "
end_station = gets.chomp.downcase

starting_line = gets.chomp
start = subway_lines[:n].index(starting_line)


starting_station = gets.chomp
ending_line = gets.chomp
ending_station = gets.chomp
