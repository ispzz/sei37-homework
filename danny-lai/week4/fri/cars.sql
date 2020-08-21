DROP TABLE IF EXISTS cars;

CREATE TABLE cars (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  image_url TEXT,
  brand_id INTEGER
);

INSERT INTO cars (name, image_url, brand_id)
  VALUES ('X5', 'https://www.bmw.com.au/content/dam/bmw/common/all-models/x-series/x5/2019/highlights/bmw-x5-highlights-gallery-desktop-03.jpg', 1);

INSERT INTO cars (name, image_url, brand_id)
  VALUES ('M4', 'https://cdn.motor1.com/images/mgl/BV4Xv/s3/2018-bmw-m4-cs.jpg', 1);

INSERT INTO cars (name, image_url, brand_id)
  VALUES ('IS350', 'https://media.caradvice.com.au/image/private/w_2000,ar_16:9,c_lfill,f_auto,g_auto:car,q_auto/t_wm_sw/alnk2wdcw7sowf6gz45t.jpg', 1);

INSERT INTO cars (name, image_url, brand_id)
  VALUES ('LC500', 'https://cdn.motor1.com/images/mgl/1Yr3w/s1/lexus-lc-500-submodel.jpg', 2);
