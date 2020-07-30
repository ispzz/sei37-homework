DROP TABLE IF EXISTS bikes;

CREATE TABLE bikes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  brand TEXT,
  kind TEXT,
  models TEXT,
  price INTEGER,
  available BOOLEAN,
  image_url TEXT
);

INSERT INTO bikes (brand, kind, models, price, available, image_url)
VALUES(
  'CANYON',
  'Road',
  'Inflite',
  7000,
  1,
  'https://media-cdn.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw5057b70f/images/full/full_2021_/2021/full_2021_inflite-cf-sl-8_bk-tq_2779_P5.png?sw=661&sh=661&sm=fit&sfrm=png'
);

INSERT INTO bikes (brand, kind, models, price, available, image_url)
VALUES(
  'TREK',
  'Gravel',
  'CheckpointSL',
  5000,
  9,
  'https://trek.scene7.com/is/image/TrekBicycleProducts/CheckpointSL6_21_32559_B_Portrait?$responsive-pjpg$&cache=on,on&wid=480&hei=360'
);
