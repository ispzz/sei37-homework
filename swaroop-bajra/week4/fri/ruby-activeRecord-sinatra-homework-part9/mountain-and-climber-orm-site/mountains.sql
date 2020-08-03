DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  height INTEGER,
  scalable BOOLEAN,
  first_ascent INTEGER,
  image_url TEXT
);

INSERT INTO mountains (name, location, height, scalable, first_ascent, image_url)
  VALUES(
    'Mount Everest',
    'Nepal',
    8848,
    1,
    1953,
    'https://cdn.britannica.com/17/83817-050-67C814CD/Mount-Everest.jpg'
  );

INSERT INTO mountains (name, location, height, scalable, first_ascent, image_url)
  VALUES(
    'K2',
    'Pakistan',
    8611,
    1,
    1954,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/300px-K2_2006b.jpg'
  );

INSERT INTO mountains (name, location, height, scalable, first_ascent, image_url)
  VALUES(
    'Kangchenjunga',
    'India',
    8586,
    1,
    1955,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Panorama_Kangchenjunga_from_Darjeeling.jpg/936px-Panorama_Kangchenjunga_from_Darjeeling.jpg'
  );
