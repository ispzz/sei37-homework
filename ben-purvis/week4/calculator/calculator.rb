def multiply(a, b)
    a * b
end

def subtract(a, b)
    a - b
end

def add(a, b)
    a + b
end

def divide(a, b)
    a / b
end

def get_input(oper, x, b)
    case oper.chomp
        when "+"         
            puts "Your number is: " + add(x, b).to_s
        when "-"
            puts "Your number is: " + subtract(x, b).to_s
        when "/"
            puts "Your number is: " + divide(x, b).to_s
        when "x"
            puts "Your number is: " + multiply(x, b).to_s
    end
end

def get_oper()
    puts "Choose a method +, -, /, x. " +
        "\n Please type in one of these symbols and hit enter."
    print "Your operation: "
    gets
end

puts "Calculator Console App. Built with Ruby"

is_running = true

while is_running do
    oper = get_oper
    print "Input the first number: "
    x = gets.to_i
    print "Input the second number: "
    b = gets.to_i
    get_input oper, x, b
    print "Would you like to quit?\n Press Q and then hit enter"
    if gets.chomp.downcase == 'q' 
        is_running = false 
    end
end
