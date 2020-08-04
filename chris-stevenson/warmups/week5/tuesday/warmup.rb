require 'pry';

class Robot
  def generate_name
    characters = Array('A'..'Z')
    array_name = Array.new(2) {characters.sample}
    3.times do
      array_name.push(rand(10))
    end #times loop
    array_name.join
  end#generate_name
  def initialize
    @init_name = generate_name
    @method_call_count = 1
    @time_init = Time.now.to_i
  end #initialize
  def name
    @method_call_count +=1
    @init_name
  end
  def reset
    @method_call_count +=1
    @init_name = generate_name
  end
  def instruction_count
    @method_call_count
  end
  def lifetime
    timenow = Time.now.to_i - @time_init
  end
end #Robot class

binding.pry
puts 'Stop here'
