mta = {
    'N' => ['ts', '34', '28-n', '23-n', 'us', '8-n'],
    'L' => ['8-L', '6', 'us', '3', '1'],
    '6' => ['gc', '33', '28-6', '23-6', 'us', 'ap']
  }

puts "Going somewhere (yes or no)?"
trip = gets.chomp

until trip == 'no'
puts "What train are you riding #{mta.keys}?"
train1 = gets.chomp.capitalize

while ! mta.include? train1
  puts "What train are you riding #{mta.keys}?"
  train1 = gets.chomp.capitalize
end

puts "Where are you starting #{mta[train1]}?"
start = gets.chomp.downcase

while ! mta[train1].include? start
  puts "Where are you starting #{mta[train1]}?"
  start = gets.chomp.downcase
end

start_index = mta[train1].index start

puts "What train are you arriving with #{mta.keys}?"
train2 = gets.chomp.capitalize.capitalize

while ! mta.include? train2
  puts "What train are you arriving with #{mta.keys}?"
  train2 = gets.chomp.capitalize.capitalize
end

puts "Where are you finishing your journey #{mta[train2]}?"
stop = gets.chomp.downcase

while ! mta[train2].include? stop
  puts "Where are you finishing your journey #{mta[train2]}?"
  stop = gets.chomp.downcase
end

stop_index = mta[train2].index stop

same_train_answer = start_index - stop_index

multi_train_start_index = mta[train1].index('us') - start_index
multi_train_stop_index =  mta[train2].index('us') - stop_index
multi_train_answer = multi_train_start_index + multi_train_stop_index

if train1 == train2
  puts "You have #{same_train_answer} stops to reach your destination"
else
  puts "You have #{multi_train_answer} stops to reach your destination"
end
puts 'Going somewhere else (yes or no)?'
trip2 = gets.chomp

if trip2 == 'no'
break
end

end
