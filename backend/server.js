const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Conexión a la base de datos de Leppe
const db = new sqlite3.Database('./leppe.sqlite', (err) => {
  if (err) console.error("Error al abrir DB:", err.message);
  console.log('Conectado a la base de datos SQLite de Leppe.');
});

// Crear tabla de progreso de señas (El "Plus" educativo)
db.run(`CREATE TABLE IF NOT EXISTS progreso (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  usuario TEXT,
  seña_id INTEGER,
  completada BOOLEAN
)`);

// Rutas base
app.get('/', (req, res) => {
  res.send('Servidor de Leppe funcionando 🚀');
});

// Ruta para obtener las 100 señas (simulada por ahora)
app.get('/api/señas', (req, res) => {
  res.json({ mensaje: "Aquí se enviarán las 100 señas de LSM próximamente" });
});

app.listen(PORT, () => {
  console.log(`Servidor de Leppe corriendo en http://localhost:${PORT}`);
});