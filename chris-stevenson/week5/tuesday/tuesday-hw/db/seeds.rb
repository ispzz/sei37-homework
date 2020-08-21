# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Disney_characters.destroy_all

Disney_characters.create(
  name: 'Mickey',
  debut: 'Steamboat Willie (1928)',
  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Mickey_Mouse.png/220px-Mickey_Mouse.png',
  age: 92
)

Disney_characters.create(
  name: 'Donald Duck',
  debut: 'The Wise Little Hen (1934)',
  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Donald_Duck.svg/220px-Donald_Duck.svg.png',
  age: 86
)

Disney_characters.create(
  name: 'Goofy',
  debut: "Mickey's Revue (1932)",
  image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Goofy.svg/1200px-Goofy.svg.png',
  age: 88
)
