import app from './app.js';



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// // Define tus rutas aquí después de habilitar CORS
// app.post('/api/contact', (req, res) => {
//   res.json({ message: 'Formulario recibido' });
// });
