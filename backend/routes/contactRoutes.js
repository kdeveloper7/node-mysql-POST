import express from 'express';
import db from '../config/db.js';
import { createContact } from '../controllers/contactController.js';

const router = express.Router();

// Ruta temporal para probar la conexión
router.get('/test-connection', async (req, res) => {
    try {
        await db.getConnection();
        res.status(200).json({ message: 'Database connection successful' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error });
    }
});

router.post('/', createContact);

export default router;
