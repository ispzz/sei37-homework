# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program that will tell you how many times each nucleotide occurs in a string.
#
# It should also tell you if a character in the string is not a valid nucleotide.
#
# Example:
#
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

def nucleotide_count (sample)
  a = 0
  t = 0
  g = 0
  c = 0

  chars = sample.split('')

  chars.each do |letter|
    # puts "looking at letter #{letter}"
    case letter
    when "A" then a=a+1
    when "T" then t=t+1
    when "G" then g=g+1
    when "C" then c=c+1
    else puts "#{letter} is not valid"
    end # case
  end # each

  puts "_____ Results of Nucleotide Count _____"
  puts "A = #{a.to_s}"
  puts "C = #{c.to_s}"
  puts "G = #{g.to_s}"
  puts "T = #{t.to_s}"

end

nucleotide_count("AATGCdf")


def count_nucleotides dna
  bases_count = {
    'A' => 0,
    'C' => 0,
    'T' => 0,
    'G' => 0
  }

  dna.each_char do |base|
    if bases_count.key? base
      bases_count[ base ] += 1
    else
      puts "#{base} not a valid nucleotide"
    end # if
  end#each_char

  bases_count.each do |key, val|
    puts "#{key}: #{val}"
  end#bases_count
  
end# count_nucleotides
