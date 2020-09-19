# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dog.destroy_all

Dog.create(
  name: 'Nala',
  breed: 'Staffy x Kelpie',
  age: 1,
  description: 'Total Sweetheart',
  image: 'https://res.cloudinary.com/petrescue/image/upload/a_0/c_crop,w_1333,h_1333,x_0,y_285/c_fill,w_638,h_638/v1596540286/szxdkigj4ulvhyz6fsj4.jpg'
)

Dog.create(
  name: 'Sam',
  breed: 'Fox Terrier',
  age: 6,
  description: 'I love to be on the go',
  image: 'https://res.cloudinary.com/petrescue/image/upload/a_0/c_crop,w_750,h_750,x_0,y_164/c_fill,w_638,h_638/v1596539544/z4wzyxwbn28wsakrnsqs.jpg'
)

Dog.create(
  name: 'Kong',
  breed: 'Shar-Pei',
  age: 3,
  description: 'Beautiful Nature!',
  image: 'https://res.cloudinary.com/petrescue/image/upload/a_0/c_crop,w_925,h_925,x_18,y_0/c_fill,w_638,h_638/v1596529452/obndcb0j3ge3pzeiihto.jpg'
)

Dog.create(
  name: 'Frankie',
  breed: 'Bull Arab Mix',
  age: 2,
  description: 'Big softie',
  image: 'https://res.cloudinary.com/petrescue/image/upload/h_638,w_638,c_pad,q_auto:best,f_auto/v1596510568/k4bakdszv8qevo7fiknk.jpg'
)

Dog.create(
  name: 'Angelo',
  breed: 'Border Collie x Wolfhound',
  age: 1,
  description: 'Playful and Cuddly',
  image: 'https://res.cloudinary.com/petrescue/image/upload/a_0/c_crop,w_519,h_519,x_784,y_413/c_fill,w_638,h_638/v1596448035/atam1ufr0gjxgbrbkm3y.jpg'
)
