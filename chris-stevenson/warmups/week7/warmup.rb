
def dna_check(input1, input2)
  puts input1
  puts input2
  input2 = input2.split('')
  input1.each_char.with_index do |char, index|
    if char == input2[index]
      print ' '
    else
      print '^'
    end
  end
  puts ''
end

dna_check('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')
