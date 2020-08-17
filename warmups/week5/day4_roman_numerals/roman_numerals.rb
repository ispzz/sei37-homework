class Roman
    def initialize
        # An instance variable so that we can use it in any method of this class
        @roman_map = {
            1000 => 'M',
             900 => 'CM',
             500 => 'D',
             400 => 'CD',
             100 => 'C',
              90 => 'XC',
              50 => 'L',
              40 => 'XL',
              10 => 'X',
               9 => 'IX',
               5 => 'V',
               4 => 'IV',
               1 => 'I'
          }
    end

    # takes in an argument of number
    # the argument in this case is 1990 on line 61
    def to_roman( number )

        # create a variable to store the result
        result = ''
        
        # First we'll loop through @roman_map and output all the keys and their values
        @roman_map.each do |key, value|
            # puts "key: #{key}, value: #{value}"

            # While number is equal to or greater than the current key then run this loop
            # E.g. While 1990 >= 1000
            # e.g while 990 >= 900
            while number >= key

                # append the value for that key (the roman numeral string) to our result string
                result += value
                # outputs current number >= key
                puts "number: #{number}, key: #{key}"

                # subtract the number we just processed (the key) from the input number (date)
                # so this will now give us a new number of 990
                number -= key
                puts "new number: #{number}, new result: #{result}"
                
            end # while end
            
            # puts "number: #{number}, result: #{result}"

        end # .each end

        # return the final result
        result

    end # to_roman end

end # class end

roman = Roman.new
puts roman.to_roman 1990