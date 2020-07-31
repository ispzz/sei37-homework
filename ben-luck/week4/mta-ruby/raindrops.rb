# Write a program using Ruby that will take a number (eg 28 or 1755 or 9, etc) and output the following:
#
# If the number contains 3 as a factor, output 'Pling'.
# If the number contains 5 as a factor, output 'Plang'.
# If the number contains 7 as a factor, output 'Plong'.
# If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
# Examples
# 28 has 7 as a factor.
# In raindrop-speak, this would be a simple "Plong".
# 1755 has 3 and 5 as factors.
# In raindrop-speak, this would be a "PlingPlang".
# 34 has neither 3, 5 nor 7 as a factor.
# Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".
# New file setup today. You will need to create a raindrops.rb file that can be executable in your terminal.

def raindrops number
  output = ''
  if number % 3 == 0
    output += 'Pling'
  end
  output += 'Plang' if number % 5 == 0
  output += 'Plong' if number % 7 == 0

  if output.empty?
    return number
  end

  output
end

puts "input 6: #{raindrops 6}"
puts "input 10: #{raindrops 10}"
puts "input 28: #{raindrops 28}"

# 1. Create an array of the days of the week
# Create a variable named days_of_the_week as an array of the following:
# Monday
# Tuesday
# Wednesday
# Thursday
# Friday
# Saturday
# Sunday

days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

p days_of_the_week

# 2. My calendar says the first day is Sunday...
# Remove Sunday from the last postion and move it to the first position. Use array methods.

days_of_the_week.pop
days_of_the_week.unshift('Sunday')

# 3. Create a new array of the days of the week:
# The first inner array should be the weekdays
# The second inner array should be the weekend days


week_days = days_of_the_week[0..4]

week_end = days_of_the_week[5..6]

week_parts = [week_days, week_end]

# require 'pry'
# binding.pry

p week_parts

week_parts[0][3] # For Thursday
week_parts.last.last # For Sunday


# 4. Remove either the weekdays or the weekends
# Your choice...

week_parts.pop
p week_parts

# 5. Sort tge remaining days alphabetically

week_parts.first.sort!

week_parts.flatten
