-- Dive locations

DROP TABLE IF EXISTS locations;

CREATE TABLE locations(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  image_url TEXT
);

INSERT INTO locations ( name, location, image_url )
  VALUES(
    'Nusa Lembongan',
    'Bali',
    'https://www.backstreetnomad.com/wp-content/uploads/2018/04/Jungut-Batu-Beach-from-our-villa-on-the-Nusa-Lembongan-Hill-800x534.jpg'
  );

INSERT INTO locations ( name, location, image_url )
  VALUES(
    'Fakarava',
    'Tahiti',
    'https://upload.wikimedia.org/wikipedia/commons/e/e1/Fakarava_Tetamanu_pass.jpg'
  );

INSERT INTO locations ( name, location, image_url )
  VALUES(
    'Shelly Beach',
    'Sydney',
    'https://s1.at.atcdn.net/wp-content/uploads/2016/12/Shelly.jpg'
  );

INSERT INTO locations ( name, location, image_url )
  VALUES(
    'Fish Rock Cave',
    'South West Rocks',
    'https://img.rezdy.com/PRODUCT_IMAGE/32638/fish_rock_shallow_entrance_lg.jpg'
  );
