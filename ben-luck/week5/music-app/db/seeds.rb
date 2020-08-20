# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Artists..."

Artist.destroy_all


juice = Artist.create!(
  name:'Juice WRLD',
  dob:'02/12/1998',
  nationality: 'USA',
  image:'https://i.guim.co.uk/img/media/cd59a408307ade77175cbef95d736687c971baf6/0_1869_5792_3473/master/5792.jpg?width=605&quality=45&auto=format&fit=max&dpr=2&s=5b7b4c748e9bc795f4759945ee241b8c',
  followers: 11.8
)

young = Artist.create!(
  name:'Young Thug',
  dob:'16/08/1991',
  nationality: 'USA',
  image:'https://www.rollingstone.com/wp-content/uploads/2019/08/youngthug-1.jpg?resize=1800,1200&w=1200',
  followers: 2000000
)

week = Artist.create!(
  name:'The Weekend',
  dob:'16/02/1990',
  nationality: 'Canada',
  image:'https://pbs.twimg.com/profile_images/1230323093446352896/h8Dz_iO5_400x400.jpg',
  followers: 23.4
)

puts "Created #{ Artist.count } artists:"
puts Artist.pluck(:name).join(', ')

Song.destroy_all
puts "Creating songs..."

Song.create! name: 'Realer N Realer', release: '17/02/1998', downloads: 3000000 , rank: 5, review: 'Decent', artist_id: juice.id

Song.create! name: 'Flaws And Sins', release: '17/02/1998', downloads: 9000000, rank: 2, review: 'Slaps', artist_id: juice.id

Song.create! name: 'Whats the move', release: '03/01/2001', downloads: 10000000, rank: 1, review: 'Anytime Banger', artist_id: young.id

Song.create! name: 'Starboy', release: '10/10/2010', downloads: 5000000, rank: 4, review: 'Classic', artist_id: week.id

Song.create! name: 'Save Your Tears', release: '10/10/2020', downloads: 8000000, rank: 3, review: 'Vibe', artist_id: week.id
