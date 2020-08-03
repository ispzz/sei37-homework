# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Write a program that will tell you how many times each nucleotide occurs in a string.
#
# It should also tell you if a character in the string is not a valid nucleotide.

# count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
# # output:
# A: 20
# C: 12
# G: 17
# T: 21

def count_nucleotides(string)
 arr = string.split(//)
 puts string
 puts "A: #{arr.count("A")}"
 puts "C: #{arr.count("C")}"
 puts "G: #{arr.count("G")}"
 puts "T: #{arr.count("T")}"
end

count_nucleotides "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"
