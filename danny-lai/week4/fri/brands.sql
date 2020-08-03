DROP TABLE IF EXISTS brands;

CREATE TABLE brands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  established_in INTEGER,
  country_of_origin TEXT,
  description TEXT,
  logo_url TEXT
);

INSERT INTO brands (name, established_in, country_of_origin, description, logo_url)
  VALUES(
    'BMW',
    1916,
    'Germany',
    'Bayerische Motoren Werke AG, commonly referred to as BMW, is a German multinational company which produces luxury vehicles and motorcycles. Automobiles are marketed under the brands BMW, Mini and Rolls-Royce, and motorcycles are marketed under the brand BMW Motorrad.',
    'https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white-show.png'
  );

INSERT INTO brands (name, established_in, country_of_origin, description, logo_url)
  VALUES(
    'Lexus',
    1989,
    'Japan',
    'Lexus is the luxury vehicle division of the Japanese automaker Toyota. The Lexus brand is marketed in more than 70 countries and territories worldwide and has ranked among the 10 largest Japanese global brands in market value.',
    'https://i.pinimg.com/originals/d7/68/e4/d768e4721a410dbc690691997650d13b.png'
  );
