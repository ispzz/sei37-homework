DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  club TEXT,
  country TEXT,
  position TEXT,
  goals INTEGER,
  age INTEGER,
  image_url TEXT
);

INSERT INTO players ( name, club, country, position, goals, age, image_url)
  VALUES(
    'Lionel Messi',
    'Barcelona',
    'Argentina',
    'Right Wing',
    700,
    33,
    'https://www.gstatic.com/tv/thumb/persons/983712/983712_v9_ba.jpg'
  );

  INSERT INTO players ( name, club, country, position, goals, age, image_url)
  VALUES(
    'Christiano Ronaldo',
    'Juventus',
    'Portugal',
    'Striker',
    748,
    35,
    'https://en.as.com/en/imagenes/2019/10/15/football/1571147582_228425_noticia_normal.jpg'
  );

  INSERT INTO players ( name, club, country, position, goals, age, image_url)
  VALUES(
    'Neymar Jr',
    'Paris Saint-Germain',
    'Brazil',
    'Left Wing',
    269,
    28,
    'https://i.kym-cdn.com/entries/icons/facebook/000/026/551/neymar.jpg'
  );
