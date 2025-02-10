import express from "express";
import { MongoClient } from "mongodb";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Configurar Express
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // Servir archivos estáticos

// Conexión a MongoDB
const uri = "mongodb://dlopnun1503:Dl132301@cluster0-shard-00-00.t0zmu.mongodb.net:27017,cluster0-shard-00-01.t0zmu.mongodb.net:27017,cluster0-shard-00-02.t0zmu.mongodb.net:27017/?replicaSet=atlas-xyz-shard-0&authSource=admin&ssl=true";
const client = new MongoClient(uri);
let db, collection;

async function connectDB() {
  await client.connect();
  db = client.db("Instituto");
  collection = db.collection("alumnos");
  console.log("✅ Conectado a MongoDB");
}
connectDB();

// API para obtener alumnos
app.get("/api/alumnos", async (req, res) => {
  const alumnos = await collection.find({}).toArray();
  res.json(alumnos);
});

// API para agregar alumnos
app.post("/api/alumnos", async (req, res) => {
  const { nombre, apellido } = req.body;
  if (!nombre || !apellido) return res.status(400).send("Faltan datos");

  await collection.insertOne({ nombre, apellido });
  res.json({ message: "Estudiante agregado" });
});

// Servir el archivo HTML principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
