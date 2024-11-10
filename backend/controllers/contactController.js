import { saveContact } from '../models/contactModel.js';

export const createContact = async (req, res) => {
    try {
        // Verificar que todos los campos necesarios están presentes en el cuerpo de la solicitud
        const { name, phone, email, subject, details } = req.body;

        if (!name || !phone || !email || !subject || !details) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
        }

        // Llamada al modelo para guardar el contacto en la base de datos
        const result = await saveContact(req.body);

        // Respuesta exitosa
        res.status(201).json({ message: 'Contact saved successfully', result });
    } catch (error) {
        // Manejo de errores si ocurre algo al guardar el contacto
        console.error(error);
        res.status(500).json({ message: 'Error saving contact', error });
    }
};
