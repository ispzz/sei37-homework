-- This file will create the learners table, and then insert some rows into it.

DROP TABLE IF EXISTS learners; --Nuke the table so we can easily re-seed the DB

CREATE TABLE learners (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- assigns IDs for us and keeps track
    name TEXT,
    location TEXT,
    language_id INTEGER     
);

INSERT INTO learners (name, location, language_id )
    VALUES(
        'Mikaela',
        'Sydney',
        1
    );
INSERT INTO learners (name, location, language_id )
    VALUES(
        'Joel',
        'Glasgow',
        3
    );
INSERT INTO learners (name, location, language_id )
    VALUES(
        'Lay',
        'Glasgow',
        2
    );
