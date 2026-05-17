import { Pool } from 'pg';

const pool = new Pool({
    user: "admin",
    password: "admin123",
    database: "week1",
    host: "127.0.0.1",
    port: 5432,
});

export default pool;