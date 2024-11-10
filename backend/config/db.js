import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

try {
    await db.getConnection();  // Verificación inicial de la conexión
    console.log('Connected to the MySQL database');
} catch (error) {
    console.error('Error connecting to the database:', error);
}

export default db;
