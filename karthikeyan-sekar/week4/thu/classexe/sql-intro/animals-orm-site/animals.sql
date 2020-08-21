CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  species TEXT,
  description TEXT,
  roundness INTEGER,
  alive BOOLEAN,
  age INTEGER,
  image_url TEXT
);

INSERT INTO animals (name, species, description, roundness, alive, age, image_url)
VALUES(
  'Ruby',
  'canine',
  'The best dog',
  3,
  1,
  4,
  'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80'
);

INSERT INTO animals (name, species, description, roundness, alive, age, image_url)
VALUES(
  'Clarence Boddicker',
  'Human',
  'baddie',
  3,
  1,
  4,
  'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80'
);
