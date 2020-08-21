DROP TABLE IF EXISTS trainers;

CREATE TABLE trainers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  age INTEGER,
  home_town TEXT,
  image_url TEXT
);

INSERT INTO trainers (name, age, home_town, image_url)
  VALUES(
    'Ash',
    10,
    'Pallet Town',
    'https://cdn.bulbagarden.net/upload/4/4e/Ash_OS_1.png'
  );

INSERT INTO trainers (name, age, home_town, image_url)
  VALUES(
    'Gary',
    14,
    'Pallet Town',
    'https://cdn.bulbagarden.net/upload/thumb/a/a4/Gary_OS_anime.png/242px-Gary_OS_anime.png'
  );
