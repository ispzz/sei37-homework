require 'colorize'

def welcome_message
  puts "Enter 's' to start and enter 'q' to quit."
  gets.chomp
end

puts "Welcome to Ruby BMI Calculator."


while welcome_message != 'q'

  print "Please enter your weight(kg): "
  weight = gets.to_f
  print "Please enter your height(cm): "
  height = gets.to_f/100

  bmi = (weight / (height ** 2)).ceil(1)
  puts "Your BMI is #{bmi}."
  
  case 
  when bmi < 18.5 then puts "You are under weight.".yellow
  when bmi >= 18.5 && bmi <= 25 then puts "You are normal weight.".green
  when bmi > 25 && bmi < 30 then puts "You are over weight.".blue
  when bmi >= 30 then puts "You are obese.".red
  end

end