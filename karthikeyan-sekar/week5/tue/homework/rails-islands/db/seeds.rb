# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Island.destroy_all

Island.create(
  name: 'Maldives',
  image: 'https://mk0travelawayrru2xew.kinstacdn.com/wp-content/uploads/2018/09/centara-grand-malidves-aerial.jpg',
  area: 298,
  population: 392960,
  currency: 'Rufiyaa'
)

Island.create(
  name: 'Mauritius',
  image: 'https://www.travelguideline.net/wp-content/uploads/2020/01/mauritius-aerial-view-1200x800.jpg',
  area: 2040,
  population: 1265475,
  currency: 'rupee'
)

Island.create(
  name: 'Bali',
  image: 'https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/10/shutterstock_1092838541-e1539745359970.jpg',
  area: 5780,
  population: 4362000,
  currency: 'Rupiah'
)
