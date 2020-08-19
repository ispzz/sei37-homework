#Scrabble score

def word_score

  scores = {
    { 1:[A, E, I, O, U, L, N, R, S, T] },
    { 2:[D, G ] },
    { 3:[B, C, M, P] },
    { 4:[F, H, V, W, Y] },
    { 5:[K] },
    { 8:[J, X] },
    { 10:[Q, Z] }
  }

  word = gets.chomp
  chars = word.split('')
  score=0

  chars.each do |letter|
    puts "looking at letter #{letter}"

    case letter
    when "a"
      score = score +1
    when "c"
      score = score +1
    end#case
  end# each
  puts score.to_s
end #word_score



word_score


#Zara's solution

def scrable_score word
  score= {
    'a'=>1, 'e'=>1
  }
se
