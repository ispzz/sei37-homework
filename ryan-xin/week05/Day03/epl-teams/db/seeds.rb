# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# ----------------------------------- TEAM ----------------------------------- #

Team.destroy_all

manchester_united = Team.create!(
  name: "Manchester United",
  founded: 1878,
  stadium: "Old Trafford",
  logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
  manager: "Ole Gunnar Solskjær",
  ucl: 1
)

arsenal = Team.create!(
  name: "Arsenal",
  founded: 1886,
  stadium: "Emirates Stadium",
  logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
  manager: "Mikel Arteta",
  ucl: 0
)

chelsea = Team.create!(
  name: "Chelsea",
  founded: 1905,
  stadium: "Stamford Bridge",
  logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
  manager: "Frank Lampard",
  ucl: 1
)

liverpool = Team.create!(
  name: "Liverpool",
  founded: 1892,
  stadium: "Anfield",
  logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
  manager: "Jürgen Klopp",
  ucl: 1
)

manchester_city = Team.create!(
  name: "Manchester City",
  founded: 1880,
  stadium: "City of Manchester Stadium",
  logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
  manager: "Pep Guardiola",
  ucl: 1
)

# ---------------------------------- PLAYER ---------------------------------- #

Player.destroy_all

Player.create!(
  name: "David de Gea",
  nationality: "Spain",
  age: 30,
  position: "Goalkeeper",
  number: 1,
  team_id: manchester_united.id
)

Player.create!(
  name: "Paul Pogba",
  nationality: "France",
  age: 27,
  position: "Midfielder",
  number: 6,
  team_id: manchester_united.id
)

Player.create!(
  name: "Bruno Fernandes",
  nationality: "Portugal",
  age: 26,
  position: "Midfielder",
  number: 18,
  team_id: manchester_united.id
)

Player.create!(
  name: "Pierre-Emerick Aubameyang",
  nationality: "Gabon",
  age: 31,
  position: "Striker",
  number: 14,
  team_id: arsenal.id
)

Player.create!(
  name: "N'Golo Kanté",
  nationality: "France",
  age: 29,
  position: "Midfielder",
  number: 7,
  team_id: chelsea.id
)

Player.create!(
  name: "Virgil van Dijk",
  nationality: "Netherlands",
  age: 29,
  position: "Centre-back",
  number: 4,
  team_id: liverpool.id
)

Player.create!(
  name: "Sergio Agüero",
  nationality: "Argentina",
  age: 32,
  position: "Striker",
  number: 10,
  team_id: manchester_city.id
)