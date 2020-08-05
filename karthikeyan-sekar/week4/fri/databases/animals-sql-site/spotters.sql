DROP TABLE IF EXISTS spotters;

CREATE TABLE spotters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  animal_id INTEGER
);

INSERT INTO spotters (name, location, animal_id)
VALUES('Mikaela', 'Sydney', 1);
INSERT INTO spotters (name, location, animal_id)
VALUES('Joel', 'Glasgow', 1);
INSERT INTO spotters (name, location, animal_id)
VALUES('Lay', 'Sydney', 3);
INSERT INTO spotters (name, location, animal_id)
VALUES('Mikaela', 'Sydney', 1);
