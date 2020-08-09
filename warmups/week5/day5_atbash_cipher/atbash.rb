class Atbash
    def initialize input
        @word = input.downcase
        @abc = ('a'..'z').to_a
        @reversed_abc = @abc.reverse
    end

    def encode
        message = ''
        # p @word
        # p @abc
        # p @reversed_abc
        @word.each_char do |letter|
            index = @abc.index(letter)
            p index
            cipher = @reversed_abc[index]
            p cipher

            message << cipher
        end
        message
    end
end

cipher = Atbash.new "Abc"
puts cipher.encode