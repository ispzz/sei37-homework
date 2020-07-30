def scrabble_score word
    scores = {
        'a' => 1, 'e' => 1, 'i' => 1, 'o' => 1,
        'u' => 1, 'l' => 1, 'n' => 1, 'r' => 1,
        's' => 1, 't' => 1, 'd' => 2, 'g' => 2,
        'b' => 3, 'c' => 3, 'm' => 3, 'p' => 3,
        'f' => 4, 'h' => 4, 'v' => 4, 'w' => 4,
        'y' => 4, 'k' => 5, 'j' => 8, 'x' => 8,
        'q' => 10, 'z' => 10
    }

    # Start out with a sum of zero. We'll increment this by the value of the tile on each iteration
    total = 0

    # For each letter, look up the score for the letter in our scores hash
    word.downcase.each_char do |letter|
        total += scores[letter]
    end

    # implicit return
    total

end

# puts scrabble_score 'cabbage'
print "Type the word: "
input = gets.chomp
puts "The score for the word #{input} is #{scrabble_score input}"


########## Chris' Solution ##########
# print "Please enter your word: "
# word = gets.chomp
# letter_array = word.split('')
# ​
# score = 0
# ​
# letter_array.each do |letter|
#   case letter.upcase
#     when 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' then score+=1
#     when 'D', 'G' then score+=2
#     when 'B', 'C', 'M', 'P' then score+=3
#     when 'F', 'H', 'V', 'W', 'Y' then score+=4
#     when 'K' then score+=5
#     when 'J', 'X' then score+=8
#     when 'Q', 'Z' then score+=10
#   end
# end
# ​
# puts "Your scrabble score for #{word} is #{score}!"