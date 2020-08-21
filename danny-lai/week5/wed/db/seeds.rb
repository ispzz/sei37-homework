# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Team.destroy_all
puts "Creating teams..."

lakers = Team.create!( name: 'Los Angeles Lakers', colours: 'Purple, gold', headcoach: 'Frank Vogel', description: 'The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers compete in the National Basketball Association (NBA) as a member of the league\'s Western Conference Pacific Division. The Lakers are one of the most successful teams in the history of the NBA, and have won 16 NBA championships, the second-most behind the Boston Celtics.' )

sixers = Team.create!( name: 'Philadelphia 76ers', colours: 'Blue, red, navy, silver, white', headcoach: 'Brett Brown', description: 'The Philadelphia 76ers (colloquially known as the Sixers) are an American professional basketball team based in the Philadelphia metropolitan area. The 76ers compete in the National Basketball Association (NBA) as a member of the league\'s Eastern Conference Atlantic Division and play at Wells Fargo Center.' )

puts "Created #{Team.count} teams: #{Team.pluck(:name).join(', ')}."

# ------------------------------------------------------------------------------

Player.destroy_all
puts "Creating players..."

Player.create!( name: 'LeBron James', number: 23, position: 'Small forward/power forward', height: '206cm', weight: '113kg', image: 'https://sportsnaut.com/wp-content/uploads/2020/02/USATSI_13986949_168386999_lowres.jpg', team_id: lakers.id )

Player.create!( name: 'Anthony Davis', number: 3, position: 'Power forward/center', height: '208cm', weight: '115kg', image: 'https://sportsnaut.com/wp-content/uploads/2020/01/USATSI_13852271_168386999_lowres.jpg', team_id: lakers.id )

Player.create!( name: 'Ben Simmons', number: 25, position: 'Power guard/forward', height: '208cm', weight: '109kg', image: 'https://sixerswire.files.wordpress.com/2020/07/ben-simmons-52.jpg?w=1000&h=600&crop=1', team_id: sixers.id )

puts "Created #{Player.count} players: #{Player.pluck(:name).join(', ')}."
