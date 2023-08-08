//Archivo principal para arrancar la aplicacion y la base de datos.

const { configEnv } = require('./configEnv');                    // Importa el archivo 'configEnv.js' para cargar las variables de entorno
const express = require('express');
const { PORT } = configEnv();                                    // Obtiene las variables de entorno
const indexRoutes = require('./routes/index.routes.js');

const app = express();                                           //Crea la instancia de la aplicacion 
app.use(express.json()); 
require('./configDB');

app.use('/api', indexRoutes);                                    // Agrega el enrutador principal al servidor


//Listen en servidor.js para mantener un orden en el código.
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);     //El callback indica que el servidor está ejecutando.
});