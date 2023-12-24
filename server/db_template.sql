INSERT INTO users (name) values ('Бочаров Никита');
INSERT INTO users (name) values ('Скрябин Егор');
INSERT INTO users (name) values ('Черненко Максим');
INSERT INTO users (name) values ('Рябичев Максим');

INSERT INTO speakers (name, specialization) values ('Толстой Лев Николаевич', 'Сомнолог');
INSERT INTO speakers (name, specialization) values ('Пушкин Александр Сергеевич', 'Поэт');

INSERT INTO events (title, content, timestamp, speaker_id) values ('Разбираем проблемы со сном', 'Контент снов', '2023-01-01 12:30:00', 1);
INSERT INTO events (title, content, timestamp, speaker_id) values ('Урок литературы', 'Пушкин', '2023-01-02 15:30:00', 2);

INSERT INTO comments (content, publication_date, event_id, user_id) values ('Я Никита! Ура, наконец-то литература', now()::timestamp, 1, 2);
INSERT INTO comments (content, publication_date, event_id, user_id) values ('А я Егор!', now()::timestamp, 1, 1);