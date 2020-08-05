require 'pry'

class Person
  #Getter
  def name
    @name
  end
  #Setter
  def name=( val )
    @name = val
  end

def self.describe
  puts "This is a class for making people! And breeding them apparently."
end
  def initialize(first_name, age)
    puts "Making a new person object: #{first_name}"
    @name = first_name
    @age = age
  end
def hello
  puts "Hello! my name is #{@name} nad Im #{@age} years old. Please like and subscribe to my page"
end

def goodbye
  puts "It was great to meet you! Dont forgot to follow me on Instagram and smash that like button."
end

binding.pry

puts 'stop here please'
end
