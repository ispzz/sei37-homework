# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Actor.."

Actor.destroy_all

  leo = Actor.create!(
  name: 'Leonardo DiCaprio',
  dob: '1974/11/11', # must use the right format for dates!
  nationality: 'American',
  bio: 'Actor, Producer, philanthropist and environmentalist',
  image: 'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'
  )

  meryl = Actor.create!(
  name: 'Meryl Streep',
  dob: '1949/06/22', # must use the right format for dates!
  nationality: 'American',
  bio: 'Often described as the "best actress of her generation"',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg'
  )

  morgan = Actor.create!(
  name: 'Morgan Freeman',
  dob: '1937/06/01', # must use the right format for dates!
  nationality: 'American',
  bio: 'Known for his distinctive deep voice',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/220px-Morgan_Freeman_Deauville_2018.jpg'
  )

  natalie = Actor.create!(
  name: 'Natalie Portman',
  dob: '1981/06/09', # must use the right format for dates!
  nationality: 'American, Israeli',
  bio: 'Prolific in film since a teenager',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Natalie_Portman_%2848470988352%29_%28cropped%29.jpg/220px-Natalie_Portman_%2848470988352%29_%28cropped%29.jpg'
  )

  puts "Created #{ Actor.count } actors:"
  puts Actor.pluck(:name).join(', ')

  puts "Creating movies.."
  Movie.destroy_all

  # leo
  Movie.create!(
  title: 'Inception',
  year: '2010/01/01',
  genre: 'Action, Adventure, Sci-Fi',
  actor_id: leo.id,
  image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  # leo
  Movie.create!(
  title: 'The Departed',
  year: '2006/01/01',
  genre: 'Crime, Drama, Thriller',
  actor_id: leo.id,
  image: 'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  # meryl
  Movie.create!(
  title: 'The Devil Wears Prada',
  year: '2006/01/01',
  genre: 'Comedy, Drama',
  actor_id: meryl.id,
  image: 'https://m.media-amazon.com/images/M/MV5BZjQ3ZTIzOTItMGNjNC00MWRmLWJlMGEtMjJmMDM5ZDIzZGM3XkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  # meryl
  Movie.create!(
  title: 'Out of Africa',
  year: '1985/01/01',
  genre: 'Biography, Drama, Romance',
  actor_id: meryl.id,
  image: 'https://m.media-amazon.com/images/M/MV5BMTc5Y2NiZWQtZGY4YS00NDI4LThhM2ItMDdhYzFlNzY1NmM0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  # morgan
  Movie.create!(
  title: 'Seven',
  year: '1996/01/01',
  genre: 'Crime, Drama, Mystery',
  actor_id: morgan.id,
  image: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  # morgan
  Movie.create!(
  title: 'Invictus',
  year: '2009/01/01',
  genre: 'Biography, Drama, History',
  actor_id: morgan.id,
  image: 'https://m.media-amazon.com/images/M/MV5BMjAyMzExMDM1N15BMl5BanBnXkFtZTcwNTcyMTQ5Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  # natalie
  Movie.create!(
  title: 'Leon',
  year: '1994/01/01',
  genre: 'Action, Crime, Drama',
  actor_id: natalie.id,
  image: 'https://m.media-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR4,0,182,268_AL_.jpg'
  )

  # natalie
  Movie.create!(
  title: 'V for Vendetta',
  year: '2005/01/01',
  genre: 'Action, Drama, Sci-Fi',
  actor_id: morgan.id,
  image: 'https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
  )

  puts "Created #{ Movie.count } movies:"
  puts Movie.pluck(:title).join(', ')
