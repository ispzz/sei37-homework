def cipher(input)
  alphabet = ('a'..'z').to_a
  reverse = alphabet.reverse
  output = []
  input.each_char do |letter|
    output.push reverse[alphabet.index(letter)]
  end
  output.join
end

puts cipher("test")
