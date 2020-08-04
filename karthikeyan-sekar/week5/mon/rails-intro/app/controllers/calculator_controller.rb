class CalculatorController < ApplicationController

def home
end

def do_calculation

  @first = params[:first_num].to_f
  @op = params[:op]
  @second = params[:second_num].to_f
  @result = case @op
  when '+' then @first + @second
  when '-' then @first - @second
  when '*' then @first * @second
  when '**' then @first ** @second
  when 'div' then @first / @second
  else
    "Bad operator"
  end
end
end
