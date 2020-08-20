# Write a program that will tell you how many times each nucleotide occurs in a string.

# def count_nucleotides(string)

#     all_a = string.scan(/a/)
#     all_c = string.scan(/c/)
#     all_g = string.scan(/g/)
#     all_t = string.scan(/t/)

# end


# SOLUTION:

def count_nucleotides dna
    bases_count = {
        'A' => 0,
        'C' => 0, 
        'T' => 0,
        'G' => 0,
    }
    
    
    #
    dna.each_char do |x|
        if bases_count.key? base
            bases_count[ base ] += 1
        else 
            puts "#{base} not a valid nucleotide"
        end # if
    end # DNA.each_char end

    bases_count.each do |key, val|
        puts "#{key} : #{val}"
    end #bases_count.each end
    

end # count nucleotides end

