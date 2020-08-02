
DROP TABLE IF EXISTS noodles;

CREATE TABLE noodles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  deliciousness INTEGER,
  country_of_origin TEXT,
  description TEXT,
  image_url TEXT
);

INSERT INTO noodles (name, deliciousness, country_of_origin, description, image_url)
  VALUES(
    'Pho',
    9,
    'Vietnam',
    'Pho is a Vietnamese soup consisting of broth, rice noodles, herbs, and meat (usually beef). Pho is a very popular food in Vietnam where it is served in household, street stalls and restaurants all over the country. Pho is considered the national dish of Vietnam.',
    'https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg'
  );

INSERT INTO noodles (name, deliciousness, country_of_origin, description, image_url)
  VALUES(
    'Ramen',
    8,
    'Japan',
    'Ramen is a Japanese noodle soup. It consists of wheat noodles served in a meat or (occasionally) fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork, nori (dried seaweed), menma, and scallions. Nearly every region in Japan has its own variation of ramen',
    'https://cdn.shopify.com/s/files/1/0111/1729/7722/articles/shutterstock_697241275_tonkotsu_ramen-landscape_2048x2048.jpg?v=1562316760'
  );
