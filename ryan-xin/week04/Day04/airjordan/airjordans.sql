DROP TABLE IF EXISTS airjordans;

CREATE TABLE airjordans (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  original_release INTEGER,
  designer TEXT,
  color TEXT,
  price TEXT,
  retro BOOLEAN,
  image_url TEXT
);

INSERT INTO airjordans (name, original_release, designer, color, price, retro, image_url)
  VALUES(
    "Air Jordan 1",
    1985,
    "Peter Moore",
    "Black/Red",
    "$65",
    1,
    "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-1-retro-og-hero_xf8joi.jpg"
  );

INSERT INTO airjordans (name, original_release, designer, color, price, retro, image_url)
  VALUES(
    "Air Jordan 2",
    1986,
    "Peter Moore/Bruce Kilgore",
    "White/Red",
    "$100",
    1,
    "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-2-retro-og-hero_vdtm5k.jpg"
  );

INSERT INTO airjordans (name, original_release, designer, color, price, retro, image_url)
  VALUES(
    "Air Jordan 3",
    1988,
    "Tinker Hatfield",
    "White/Cement Grey",
    "$100",
    1,
    "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/jj7s5z59dnzmcmb1ccfd.jpg"
  );

INSERT INTO airjordans (name, original_release, designer, color, price, retro, image_url)
  VALUES(
    "Air Jordan 4",
    1989,
    "Tinker Hatfield",
    "Black/Cement Grey",
    "$110",
    1,
    "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/air-jordan-4-retro-og-hero_frnqkt.jpg"
  );

INSERT INTO airjordans (name, original_release, designer, color, price, retro, image_url)
  VALUES(
    "Air Jordan 5",
    1990,
    "Tinker Hatfield",
    "Black/Metallic Silver",
    "$125",
    1,
    "https://images.solecollector.com/complex/image/upload/c_fill,f_auto,fl_lossy,q_auto,w_1100/svdjdfbhcu6kft1hobnx.jpg"
  );