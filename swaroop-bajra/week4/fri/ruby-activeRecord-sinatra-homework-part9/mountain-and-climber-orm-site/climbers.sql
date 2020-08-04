DROP TABLE IF EXISTS climbers;

CREATE TABLE climbers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  country TEXT,
  mountain_id INTEGER,
  image_url TEXT
);

INSERT INTO climbers (name, country, mountain_id, image_url)
  VALUES(
    'Tenzing Norgay',
    'Nepal',
    '1',
    'https://academytravel.com.au/wp-content/uploads/2020/04/Meeting-Tenzing-Norgay.jpg'
  );

INSERT INTO climbers (name, country, mountain_id, image_url)
  VALUES(
    'Sir Edmund Hillary',
    'New Zealand',
    '1',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Edmund_Hillary%2C_c._1953%2C_autograph_removed.jpg/220px-Edmund_Hillary%2C_c._1953%2C_autograph_removed.jpg'
  );

INSERT INTO climbers (name, country, mountain_id, image_url)
  VALUES(
    'Achille Compagnoni',
    'Italy',
    '1',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Compagnoni_summit_K2.jpg/235px-Compagnoni_summit_K2.jpg'
  );

INSERT INTO climbers (name, country, mountain_id, image_url)
  VALUES(
    'Lino Lacedelli',
    'Italy',
    '2',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Lino_Lacedelli_1954.jpg/220px-Lino_Lacedelli_1954.jpg'
  );

INSERT INTO climbers (name, country, mountain_id, image_url)
  VALUES(
    'George Band',
    'England',
    '3',
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/George_Band.jpg'
  );

INSERT INTO climbers (name, country, mountain_id, image_url)
  VALUES(
    'Joe Brown',
    'England',
    '3',
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/Joe_Brown.jpg'
  );
