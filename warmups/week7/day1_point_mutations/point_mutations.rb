def hamming strand1, strand2
    hamming_distance = 0
    pointer_position = ''
    strand1.chars.each_with_index do |letter, index|
        # index = strand1.index(letter)
        # puts "letter: #{letter}, index #{index}"
        if letter != strand2[index]
            hamming_distance += 1
            pointer_position += '^'
        else
            pointer_position += ' '
        end # end of letter != strand2
    end # end of do
    puts hamming_distance
    puts strand1, strand2, pointer_position
end

hamming 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'

# Solution 2
def hamming_another strand1, strand2
    differences = strand1.chars.map.with_index { |letter, index| letter != strand2[index] }
    # differences = strand1.chars.tap{|val| p val}.map.with_index { |letter, index| letter != strand2[index] }
    # tap is returning each value of chars
    p differences
    hamming_distance = differences.count true
    puts hamming_distance, strand1, strand2
    puts differences.map { |correct_letter| correct_letter ? '^' : ' ' }.join # pointer position
    # the differences array consists of = [true, false, true, false, true, false, false, true, false, true, false, false, false, false, true, true, false]
    # .map will iterate through each value of the differences array and for every true will return ^ and for every false will return a space ' '
end

hamming_another 'GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT'