DROP TABLE IF EXISTS players;

CREATE TABLE players (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  nationality TEXT,
  age INTEGER,
  position TEXT,
  number INTEGER,
  team_id INTEGER
);

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "David de Gea",
    "Spain",
    30,
    "Goalkeeper",
    1,
    1
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Paul Pogba",
    "France",
    27,
    "Midfielder",
    6,
    1
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Bruno Fernandes",
    "Portugal",
    26,
    "Midfielder",
    18,
    1
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Pierre-Emerick Aubameyang",
    "Gabon",
    31,
    "Striker",
    14,
    2
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "N'Golo Kanté",
    "France",
    29,
    "Central Midfielder",
    7,
    3
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Virgil van Dijk",
    "Netherlands",
    29,
    "Centre-back",
    4,
    4
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Mohamed Salah",
    "Egypt",
    28,
    "Forward",
    11,
    4
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Sergio Agüero",
    "Argentina",
    32,
    "Striker",
    10,
    5
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Kevin De Bruyne",
    "England",
    29,
    "Midfielder",
    17,
    5
  );

INSERT INTO players ( name, nationality, age, position, number, team_id )
  VALUES(
    "Harry Kane",
    "England",
    27,
    "Striker",
    10,
    6
  );

