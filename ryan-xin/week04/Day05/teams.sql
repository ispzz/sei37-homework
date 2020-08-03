DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nickname TEXT,
  founded INTEGER,
  stadium TEXT,
  logo_url TEXT,
  manager TEXT,
  ucl BOOLEAN
);

INSERT INTO teams ( name, nickname, founded, stadium, logo_url, manager, ucl )
  VALUES(
    "Manchester United",
    "The Red Devils",
    1878,
    "Old Trafford",
    "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    "Ole Gunnar Solskjær",
    1
  );

INSERT INTO teams ( name, nickname, founded, stadium, logo_url, manager, ucl )
  VALUES(
    "Arsenal",
    "The Gunners",
    1886,
    "Emirates Stadium",
    "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
    "Mikel Arteta",
    0
  );

INSERT INTO teams ( name, nickname, founded, stadium, logo_url, manager, ucl )
  VALUES(
    "Chelsea",
    "The Blues",
    1905,
    "Stamford Bridge",
    "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    "Frank Lampard",
    1
  );

INSERT INTO teams ( name, nickname, founded, stadium, logo_url, manager, ucl )
  VALUES(
    "Liverpool",
    "The Reds",
    1892,
    "Anfield",
    "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    "Jürgen Klopp",
    1
  );

INSERT INTO teams ( name, nickname, founded, stadium, logo_url, manager, ucl )
  VALUES(
    "Manchester City",
    "Sky Blues",
    1880,
    "City of Manchester Stadium",
    "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    "Pep Guardiola",
    1
  );

INSERT INTO teams ( name, nickname, founded, stadium, logo_url, manager, ucl )
  VALUES(
    "Tottenham Hotspur",
    "The Lilywhites",
    1882,
    "Tottenham Hotspur Stadium",
    "https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg",
    "José Mourinho",
    0
  );