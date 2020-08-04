# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
# Write a program that will tell you how many times each nucleotide occurs in a string.
# It should also tell you if a character in the string is _not_ a valid nucleotide.
# Example:
# ```ruby
# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# output:
# A: 20
# C: 12
# G: 17
# T: 21
## Source
# The _Calculating DNA Nucleotides_ problem at [Rosalind](http://rosalind.info/problems/dna/)-color: #2F4F4F;

# input = gets
# input.each_char do |x|
# p x
# end
#
# input = 'abcdef'
#
# input.split('').each { |c|
#     puts c
# }

def count_nucleotides dna
    bases_count = {
        'A' => 0,
        'C' => 0,
        'T' => 0,
        'G' => 0
    }

    # iterate through each character of the string on line 36
    dna.each_char do |base|
    #dna.split('').each do |base|
        # .key? is a predicate method, will return true if the key given(base) is present in the hash
        if bases_count.key? base

            # Adding value to key
            bases_count[ base ] += 1

        else

            # if the base is not a key in the hash then output that it's not a valid nucleotide.
            puts "#{base} is not a valid nucleotide"

        end # end bases_count.key?

    end # end dna.each_char

    # output the number of occurances of each nucleotide in line 36
    bases_count.each do |key, val|

        puts "#{key}: #{val}"

    end # end bases_count.each

end # end count_nucleotides

count_nucleotides "AGCTTTTXCATTCTGACTGCAACMGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
