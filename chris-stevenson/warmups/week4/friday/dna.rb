
def count_dna(string)
  string = string.upcase.split('')
  count_a = 0
  count_c = 0
  count_g = 0
  count_t = 0
  count_extras = 0
  extras_array = []

  string.each do |letter|
    case letter
      when 'A' then count_a+=1
      when 'C' then count_c+=1
      when 'G' then count_g+=1
      when 'T' then count_t+=1
      else
        count_extras+=1
        extras_array.push letter
    end
  end

    puts "Your nucleotide count is:
      A: #{count_a}
      C: #{count_c}
      G: #{count_g}
      T: #{count_t}"
    if count_extras > 0
      puts "Please note that #{extras_array.uniq} is/are invalid nucleotides"
      puts "There were #{count_extras} invalid nucleotides in your DNA"
    end
end

count_dna('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC')
