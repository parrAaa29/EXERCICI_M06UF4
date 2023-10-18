import './loadEnvironment.js';

const express = require('express');
const app = express();

const nombres = [
    "Angulo Caballero, Alan Matthew",
    "Argueta Navarrete, Nahomy Fernanda",
    "Bautista Martin, Brian",
    "Blay Estrada, Alex",
    "Condal García, Pol",
    "Du Pre Peralta, Gerard",
    "Gàndara Sánchez, Jaume",
    "Garrido Pintado, Albert",
    "Herrerias Cuscullola, Rafel",
    "Higueras Rubiño, Jaime",
    "Linares Vigo, Joan",
    "Llamas Masdeu, Dídac",
    "Muñoz Valenzuela, Alejandro",
    "Najarro García, Marc",
    "Pallarés Sirvent, Quim",
    "Parra Raya, Óscar",
    "Pascual González, Alejandro",
    "Rodellar Martínez, Alberto",
    "Ros Puig, Manuel",
    "Sánchez Erazo, Luis Mario",
    "Sans Lleixà, Martí",
    "Sanz Sanchez, Oscar",
    "Simón Pérez, Kevin",
    "Soto Gómez, Eugeni",
    "Trujillo Albert, Pol",
    "Trujillo Guadiamos, Victor Manuel"
];

const totalAlumnos = nombres.length;

app.get('/alumnos', (req, res) => {
    res.json({ alumnos: nombres, total_alumnos: totalAlumnos });
});

const port = 3000; // Puedes cambiar el puerto si lo deseas
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});


// eslint-disable-next-line arrow-body-style
app.get('/', (req: Request, res: Response) => {
	return res.send({message: 'Hello World!'});
});

app.listen(process.env.HOST_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}!`);
});

export default app;
