import pool from "../db/index.js";
const createUser = async (name, email, role) => {
    const query = 'INSERT INTO users (name, email, role) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, role];
    try {
        const res = await pool.query(query, values);
        return res.rows[0];
    }
    catch (err) {
        console.error('Error creating user:', err);
        throw err;
    }
};
const getUserById = async (id) => {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    try {
        const res = await pool.query(query, values);
        return res.rows[0];
    }
    catch (err) {
        console.error('Error fetching user by id:', err);
        throw err;
    }
};
const getAllUsers = async () => {
    try {
        const res = await pool.query('SELECT * FROM users');
        return res.rows;
    }
    catch (error) {
        console.error('Error fetching all users:', error);
        throw error;
    }
};
const updateUser = async (id, name, email, role) => {
    const query = 'UPDATE users SET name = $1, email = $2, role = $3 WHERE id = $4 RETURNING *';
    const values = [name, email, role, id];
    try {
        const res = await pool.query(query, values);
        return res.rows[0];
    }
    catch (err) {
        console.error('Error updating user:', err);
        throw err;
    }
};
const deleteUser = async (id) => {
    try {
        const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
        const values = [id];
        const res = await pool.query(query, values);
        return res.rows[0];
    }
    catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};
export { createUser, getUserById, getAllUsers, updateUser, deleteUser };
//# sourceMappingURL=users.services.js.map