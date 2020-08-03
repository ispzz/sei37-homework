DROP TABLE IF EXISTS mons;

CREATE TABLE mons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  type1 TEXT,
  type2 TEXT,
  pokedex TEXT,
  weight FLOAT,
  height FLOAT,
  image_url TEXT,
  trainer_id INTEGER
);

INSERT INTO mons (name, type1, type2, pokedex, weight, height, image_url, trainer_id)
  VALUES(
    'Bulbasaur',
    'Grass',
    'Poison',
    'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.',
    6.9,
    0.7,
    'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    1
  );

INSERT INTO mons (name, type1, type2, pokedex, weight, height, image_url, trainer_id)
  VALUES(
    'Charmander',
    'Fire',
    '',
    'Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.',
    8.5,
    0.6,
    'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
    1
  );

INSERT INTO mons (name, type1, type2, pokedex, weight, height, image_url, trainer_id)
  VALUES(
    'Squirtle',
    'Water',
    '',
    'After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.',
    9.0,
    0.5,
    'https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png',
    1
  );

INSERT INTO mons (name, type1, type2, pokedex, weight, height, image_url, trainer_id)
  VALUES(
    'Eevee',
    'Normal',
    '',
    'Its genetic code is irregular. It may mutate if it is exposed to radiation from Evolution stones.',
    6.5,
    0.3,
    'https://cdn.bulbagarden.net/upload/thumb/e/e2/133Eevee.png/250px-133Eevee.png',
    2
  );
