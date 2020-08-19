class Roman
    def initialize
        @roman_map = {
            1000    => 'M',
            900     => 'CM',
            500     => 'D', 
            400     => 'CD',
            100     => 'C',
            90      => 'XC',
            50      => 'L',
            40      => 'XL',
            10      => 'X',
            9       => 'IX',
            5       => 'V',
            4       => 'IV',
            1       => 'I'
        }
    end

    def to_roman ( number )

        result = ''

        @roman_map.each do |key, value |
            puts "key: #{key}, value: #{value}"

                while number >= key
                    result += value

                    number -= key

                end #while end
                # puts "number: #{number}, result: #{result}"
        end #.each end
        result
    end # to_roman end
end # class end

roman = Roman.new
puts roman.to_roman 1990