CREATE TABLE video_games (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	title VARCHAR(64) NOT NULL,
	author VARCHAR(64) NOT NULL,
	release_date DATE NOT NULL,
	image_url VARCHAR(256) NOT NULL
);

INSERT INTO video_games (title, author, release_date, image_url) VALUES
	('Inside', 'Playdead', '2016-08-23', 'https://www.mobygames.com/images/covers/l/358619-inside-playstation-4-front-cover.jpg'),
	('Bioshock Infinite', 'Irrational Games', '2013-03-26', 'https://www.mobygames.com/images/covers/l/266456-bioshock-infinite-windows-front-cover.jpg'),
	('XCOM 2', 'Firaxis Games', '2016-02-05', 'https://www.mobygames.com/images/covers/l/323665-xcom-2-windows-front-cover.jpg'),
	('Civilization VI', 'Firaxis Games', '2016-10-21', 'https://www.mobygames.com/images/covers/l/388979-sid-meier-s-civilization-vi-windows-front-cover.jpg'),
	('Stellaris', 'Paradox Development Studio', '2016-02-26', 'https://www.mobygames.com/images/covers/l/328430-stellaris-linux-front-cover.jpg'),
    ('Doom', 'id Software', '1993-12-10', 'https://www.mobygames.com/images/covers/l/3907-doom-dos-front-cover.jpg'),
    ('Daikatana', 'Ion Storm', '2000-05-22', 'https://www.mobygames.com/images/covers/l/12400-john-romero-s-daikatana-windows-front-cover.jpg'),
    ('Deus Ex', 'Ion Storm', '2000-06-17', 'https://www.mobygames.com/images/covers/l/76646-deus-ex-windows-front-cover.jpg'),
    ('Baldur''s Gate', 'BioWare', '1998-12-21', 'https://www.mobygames.com/images/covers/l/173495-baldur-s-gate-windows-front-cover.jpg'),
    ('Fallout', 'Black Isle Studios', '1997-09-30', 'https://www.mobygames.com/images/covers/l/418-fallout-windows-front-cover.jpg'),
    ('Wing Commander', 'Origin Systems', '1990-09-26', 'https://www.mobygames.com/images/covers/l/256976-wing-commander-dos-front-cover.jpg'),
    ('Ultima IV: Quest of the Avatar', 'Origin Systems', '1985-09-16', 'https://www.mobygames.com/images/covers/l/162133-ultima-iv-quest-of-the-avatar-dos-front-cover.jpg');
