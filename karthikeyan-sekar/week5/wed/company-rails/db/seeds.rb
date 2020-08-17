# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating artists..."

Company.destroy_all

apple = Company.create!(
  name: 'Apple ltd',
  doe: '1976/10/27',  # must use the right format for dates!
  location: 'USA',
  image: 'https://images.unsplash.com/photo-1536572701422-28e6051dd93f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80'
)

microsoft = Company.create!(
  name: 'Microsoft ltd',
  doe: '1960/04/10',  # must use the right format for dates!
  location: 'USA',
  image: 'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80'
)

google = Company.create!(
  name: 'Google',
  doe: '1960/04/10',  # must use the right format for dates!
  location: 'california',
  image: 'https://images.unsplash.com/photo-1592096304832-62463bfdc822?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
)


puts "Created  #{ Company.count } companies:"
puts Company.pluck(:name).join(', ')
