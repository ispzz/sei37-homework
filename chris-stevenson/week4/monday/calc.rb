# Calculator Ruby HW

def calc_menu
  puts "What calculator would you like to use?
    1: Basic Calculator
    2: Mortgage Calculator
    3: BMI Calculator
    4: Trip Calculator"
  chosen_calc = gets.chomp
  case chosen_calc
    when "1" then basic_calculator
    when "2" then mortgage_calculator
    when "3" then bmi_calc
    when "4" then trip_calc
  end
end


def operator_menu
  puts "What would you like to do?
    1: Add
    2: Subtract
    3: Multiply
    4: Divide
    5: Exponentially Multiply
    6: Find Square Root
    7: Quit"
  operator = gets.chomp
  case operator
    when "1" then "+"
    when "2" then "-"
    when "3" then "x"
    when "4" then "/"
    when "5" then "to the power of"
    when "6" then "sqrt"
    when "7" then "quit"
  end
end

def calc_function(start_num, operator_value, second_num)
  case operator_value
    when "+" then start_num + second_num
    when "-" then start_num - second_num
    when "x" then start_num * second_num
    when "/" then start_num / second_num
    when "to the power of" then start_num ** second_num
  end
end



def basic_calculator
  print "What is your starting number?: "
  start_num = gets.to_f
  continue_loop = true
  while continue_loop == true
    operator_value = operator_menu.chomp
    if operator_value == "quit"
      continue_loop = false
      return
    elsif operator_value == "sqrt"
      result = Math.sqrt(start_num)
      puts "The square root of #{start_num} is #{result}"
      start_num = result
    else
      print "By how much?: "
      second_num = gets.to_f
      result = calc_function(start_num, operator_value, second_num)
      puts "#{start_num} #{operator_value} #{second_num} = #{result}"
      start_num = result
    end
  end
end

def mortgage_calculator
  print "Enter desired loan amount: "
  loan_amount = gets.to_f
  print "Enter interest rate percentage: "
  interest_rate = gets.to_f/100
  print "Enter time lentgh of loan in months: "
  repay_time = gets.to_i
  i = (1+interest_rate/12)**(12/12)-1
  annuity = (1-(1/(1+i))**repay_time)/i
  result = loan_amount/annuity
  puts "Your monthly repayments will be $#{result.round(2)}"
end

def bmi_calc
  print "Enter your weight in kilograms: "
  weight = gets.to_f
  print "Enter your height in cm: "
  height = gets.to_f
  result = (weight / height / height) * 10000
  puts "Your BMI is #{result.round(2)}"
end

def trip_calc
  print "Enter trip distance in kilometers: "
  distance = gets.to_f
  print "Enter your fuel econ (kilometers per litre): "
  kmpl = gets.to_f
  print "Enter fuel cost (dollars per litre): "
  ppl = gets.to_f
  print "How fast will you be driving? (KpH): "
  kph = gets.to_f
  time = distance / kph
  cost = (distance / kmpl) * ppl
  puts "Your trip will take #{time.round(2)} hours and cost $#{cost.round(2)} in fuel."
end

calc_menu
