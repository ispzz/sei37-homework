-- Fish species

DROP TABLE IF EXISTS creatures;

CREATE TABLE creatures(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  kind TEXT,
  max_length FLOAT,
  max_weight FLOAT,
  description TEXT,
  image_url TEXT,
  location_id INTEGER
);

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Sunfish',
    'Bony Fish',
    3,
    2500,
    'Largest bony fish. Related to Porcupine fish. Have caused damage to ships due to collision while basking on the surface. They follow cold currents into the Bali, exiting the cold thermocline briefly to visit troical cleaning stations where tripical fish remove paraistes.',
    'https://blog.nationalgeographic.org/wp-content/uploads/2012/08/ocean-sunfish.jpeg',
    1
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Goliath Grouper',
    'Bony Fish',
    2.5,
    455,
    'Generally considered peaceful but known to eat sharks.',
    'https://i1.wp.com/www.costaricajourneys.com/wp-content/uploads/2012/03/grouper_fish_278x214_b.jpg',
    1
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Manta Ray',
    'Cartilaginous Fish',
    5,
    3000,
    'Graceful. Eat plankton and also visit tropical cleaning stations.',
    'https://www.anthropocenemagazine.org/wp-content/uploads/2019/09/manta-ray.jpg',
    1
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Blue Groper',
    'Bony Fish',
    1.2,
    22,
    'Can be extremely friendly and tame making. Have been known to follow divers and swimmers hoping for treats.',
    'https://fishesofaustralia.net.au/images/image/AchoerodusViridJohnTurnbull.jpg',
    3
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Port Jackson Shark',
    'Cartilaginous Fish',
    1.6,
    3,
    'Juvenile ones are extremely cute. Not dangerous to humans.',
    'https://fishesofaustralia.net.au/Images/Image/HeterodontusportusjacksoniDH2.jpg',
    3
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Wobbegong Shark',
    'Cartilaginous Fish',
    3,
    100,
    'Not dangerous to humans but people have been bitten when they harrass them. Despite always looking grumpy they are generally quite nice natured and quite like to socialise.',
    'https://www.twofishdivers.com/wp-content/uploads/2019/09/wobbegong-copy.jpg',
    3
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Grey Shark',
    'Cartilaginous Fish',
    2.6,
    34,
    'Residents to tropical reefs. A schooling shark that generally hunt at night.',
    'https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/66/2018/08/simon-pierce-5770_preview.jpeg',
    2
  );

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Great Hammerhead Shark',
    'Cartilaginous Fish',
    6.1,
    580,
    'One of the few shark species to actively hunt other sharks. Is one of the most recently evolved sharks.',
    'https://static.wixstatic.com/media/7d1020_0db478b319974cd0915767fea51ee9f7~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80,usm_0.66_1.00_0.01/HAMMER-2.webp',
    2
);

INSERT INTO creatures ( name, kind, max_length, max_weight, description, image_url, location_id )
  VALUES(
    'Grey Nurse Shark',
    'Cartilaginous Fish',
    3.2,
    190,
    'Criticially endangered species. Not considered dangerous to humans.',
    'https://jettydive.com.au/wp-content/uploads/2015/07/MD260017a-e1445394989249.jpg',
    4
);
