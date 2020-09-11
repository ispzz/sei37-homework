# You should use define a Calculator class which uses the constructor function (`initialize`) to set the question, and an `answer` method to return the answer.
class Calculator

    # set the question
    def initialize question
        @question = question
        puts "@question = #{@question}"
        matches
    end

    # Use .match to get '5 plus 13'
    # Use a regular expression to parse the question.
    def matches
        @matches = @question.match /(-?\d+) (plus|minus|divided by|multiplied by) (-?\d+)/
        # puts "@matches = #{@matches}"
    end

    # get the first and second number
    def first_int
        @matches[1].to_i
        # puts "@matches first no = #{@matches[1].to_i}"
    end

    def second_int
        @matches[3].to_i
    end

    # get the operator
    # will return the symbol
    def operator
        case @matches[2]
        when "plus" then :+
        when "minus" then :-
        when "divided by" then :/
        when "multiplied by" then :*
        end
    end

    # answer
    def answer
        @answer = first_int.send(operator, second_int)
    end

end

c = Calculator.new("What is 5 plus 13?")
d = Calculator.new("What is -6 multiplied by 4?")

puts c.answer
puts d.answer
# c.first_int
# d.matches

# THANKS CHRIS FOR A NON REGEX SOLUTION <3
class Calculator
    def initialize
      print 'What is '
      input_array = gets.chomp.split(' ')
      first_num = input_array.first.to_i
      last_num = input_array.last.delete_suffix('?').to_i
      case input_array[1]
        when 'plus' then operator = :+
        when 'minus' then operator = :-
        when 'multiplied' then operator = :*
        when 'divided' then operator = :/
      end
      answer(first_num, operator, last_num)
    end

    def answer(a, op, b)
      puts a.public_send(op, b)
    end

  end

calc = Calculator.new