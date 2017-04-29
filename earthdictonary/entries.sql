DROP DATABASE IF EXISTS entries;
CREATE DATABASE entries;

\c entries;

CREATE TABLE ent (
  ID SERIAL PRIMARY KEY,
  key VARCHAR,
  val VARCHAR,
  likes INTEGER,
  contributor VARCHAR,
  status INTEGER -- 0==Not Approved && 1==Approved
);

INSERT INTO ent (key, val, likes, contributor, status)
  VALUES ('Stratosphere', 'Second major layer of the atmosphere', 3, 'Brijendra Nag',0);
