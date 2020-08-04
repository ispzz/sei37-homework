
DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  local_name TEXT,
  location TEXT,
  height INTEGER,
  description TEXT,
  image_url TEXT
);

INSERT INTO mountains ( name, local_name, location, height, description, image_url )
  VALUES(
    'Island Peak',
    'Imja Tse',
    'Nepal',
    6189,
    'Great mountain for an introduction into ice climbing',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/ImjaTse.jpg/1024px-ImjaTse.jpg'
  );

INSERT INTO mountains ( name, local_name, location, height, description, image_url )
  VALUES(
    'Mount Kinabalu',
    'Gunung Kinabalu',
    'Malaysia',
    4095,
    'Unique ecological area. Rare plants and animals. Also surprisingly cold on summit considering you are on the equator',
    'https://upload.wikimedia.org/wikipedia/commons/4/45/MtKinabalu_view_from_kundasan.jpg'
  );
