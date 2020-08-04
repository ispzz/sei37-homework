
print "Please enter your word: "
word = gets.chomp
letter_array = word.split('')

score = 0

letter_array.each do |letter|
  case letter.upcase
    when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' then score+=1
    when 'D', 'G' then score+=2
    when 'B', 'C', 'M', 'P' then score+=3
    when 'F', 'H', 'V', 'W', 'Y' then score+=4
    when 'K' then score+=5
    when 'J', 'X' then score+=8
    when 'Q', 'Z' then score+=10
  end
end

puts "Your scrabble score for #{word} is #{score}!"
