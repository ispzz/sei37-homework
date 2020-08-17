require 'pry'

class Robot

  def initialize
    @name = name_generator
    @counter = 0
    @time_created = Time.now.to_i
    @time_since_reset = Time.now.to_i
  end

  def name_generator
    letters = ("A".."Z").to_a.sample(2).join
    numbers = (0..9).to_a.sample(3).join
    letters + numbers
  end

  def reset
    @name = name_generator
    @counter += 1
    @time_since_reset = Time.now.to_i
  end

  def name
    @counter += 1
    @name
  end

  def counter
    @counter
  end

  def timer
    time_created_since = Time.now.to_i - @time_created
    time_since_resetted = Time.now.to_i - @time_since_reset
    puts "Robot was created #{time_created_since} seconds ago and was reset #{time_since_resetted} seconds."
  end

  # binding.pry

end

robot1 = Robot.new
puts robot1.name
puts robot1.counter
sleep 2

puts "Resetting robot..."
robot1.reset
puts robot1.name
puts robot1.counter
robot1.timer
