DROP TABLE IF EXISTS people;

CREATE TABLE people (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  position TEXT,
  club TEXT,
  profile_image TEXT,
  retired BOOLEAN,
  kit_number INTEGER
);

INSERT INTO people ( name, position, club, profile_image, retired, kit_number)
  VALUES(
    'Cristiano Ronaldo',
    'Forward',
    'Juventus',
    'https://img.bleacherreport.net/img/images/photos/003/809/990/hi-res-dfa3eadf885fa54ed553545c378bc960_crop_north.jpg?h=533&w=800&q=70&crop_x=center&crop_y=top',
    0,
    7
  );

INSERT INTO people ( name, position, club, profile_image, retired, kit_number)
  VALUES(
    'Sergio Ramos',
    'Defender',
    'Real Madrid',
    'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0529%2Fr87502_1296x729_16%2D9.jpg&w=570&format=jpg',
    0,
    4
  );

INSERT INTO people ( name, position, club, profile_image, retired, kit_number)
  VALUES(
    'Zidane',
    'Midfielder',
    'Real Madrid',
    'https://specials-images.forbesimg.com/imageserve/1256685781/960x0.jpg?fit=scale',
    1,
    5
  );
