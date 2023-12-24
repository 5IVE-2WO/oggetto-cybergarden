create TABLE speakers(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialization VARCHAR(255) NOT NULL
);

create TABLE events(
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    speaker_id INTEGER NOT NULL,
    FOREIGN KEY (speaker_id) REFERENCES speakers (id)
);

create TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

create TABLE comments(
    id SERIAL NOT NULL PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    publication_date TIMESTAMP NOT NULL,
    event_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (event_id) REFERENCES events (id),
    FOREIGN KEY (user_id) REFERENCES users (id)
);