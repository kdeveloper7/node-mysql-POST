import db from '../config/db.js';

export const saveContact = async (contactData) => {
    const { name, phone, email, subject, details } = contactData;
    const query = `
        INSERT INTO contacts (name, phone, email, subject, details)
        VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await db.execute(query, [name, phone, email, subject, details]);
    return result;
};
