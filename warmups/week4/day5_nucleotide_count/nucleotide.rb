def count_nucleotides dna
    bases_count = {
        'A' => 0,
        'C' => 0,
        'T' => 0,
        'G' => 0
    }

    # iterate through each character of the string on line 36
    dna.each_char do |base|

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