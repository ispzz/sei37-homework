################       raindrops
require 'colorize'

def raindrops
  print "enter a number : "
  inputNum = gets.to_i

  if (inputNum%3 == 0)
    print "Pling".green
  end# end if

  if (inputNum%5 == 0)
    print "Plang".yellow
  end# end if

  if (inputNum%7 == 0)
    print "Plong".red
  end # end if

  puts ""

end# end raindrops



raindrops
