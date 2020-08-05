# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all

Player.create(
  name: "David de Gea",
  age: 29,
  position: "Goalkeeper",
  number: 1,
  country: "Spain",
  image: "http://assets.manutd.com/AssetPicker/images/0/0/12/30/794349/Player-Profiles-Square-DeGea1558101678953.jpg"
)

Player.create(
  name: "Harry Maguire",
  age: 27,
  position: "Defender",
  number: 5,
  country: "England",
  image: "http://assets.manutd.com/AssetPicker/images/0/0/12/76/806043/Player-Profiles-Square-HM1582221275970.jpg"
)

Player.create(
  name: "Paul Pogba",
  age: 27,
  position: "Midfielder",
  number: 6,
  country: "France",
  image: "http://assets.manutd.com/AssetPicker/images/0/0/12/30/794360/Player-Profiles-Square-Pogba1558456904650.jpg"
)

Player.create(
  name: "Bruno Fernandes",
  age: 25,
  position: "Midfielder",
  number: 18,
  country: "Portuguese",
  image: "http://assets.manutd.com/AssetPicker/images/0/0/13/162/893673/Player-Profiles-Square-Bruno-Fernandes1582221382091.jpg"
)

Player.create(
  name: "Anthony Martial",
  age: 24,
  position: "Forward",
  number: 9,
  country: "France",
  image: "http://assets.manutd.com/AssetPicker/images/0/0/12/30/794322/Player-Profiles-Square-Martial1558011857228.jpg"
)

Player.create(
  name: "Marcus Rashford",
  age: 10,
  position: "Forward",
  number: 10,
  country: "England",
  image: "http://assets.manutd.com/AssetPicker/images/0/0/12/30/794361/Player-Profiles-Square-Rashford1558453207029.jpg"
)