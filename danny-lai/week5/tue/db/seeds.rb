# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Duck.destroy_all

Duck.create(
  name: 'Mandarin Duck',
  rotundness: 5,
  overview: 'The mandarin duck (Aix galericulata) is a perching duck species native to the East Palearctic. It is medium-sized, at 41–49 cm (16–19 in) long with a 65–75 cm (26–30 in) wingspan. It is closely related to the North American wood duck, the only other member of the genus Aix.',
  image: 'https://gdb.voanews.com/D1AC130C-23B0-4F22-A474-0CE5A310313C_cx0_cy5_cw0_w1200_r1.jpg'
)

Duck.create(
  name: 'Mallard',
  rotundness: 8,
  overview: 'The mallard (/ˈmælɑːrd, ˈmælərd/) (Anas platyrhynchos) is a dabbling duck that breeds throughout the temperate and subtropical Americas, Eurosiberia, and North Africa and has been introduced to New Zealand, Australia, Peru, Brazil, Uruguay, Argentina, Chile, Colombia, the Falkland Islands, and South Africa.',
  image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Birds_of_Sweden_2016_52.jpg'
)

puts "Done! Created #{Duck.count} ducks."
puts Duck.pluck(:name).join(', ')
