CREATE TABLE users (

    -- uuid makes sure id is unique universally and is generated automatically, it helps in distributed systems where multiple databases might be generating ids
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);