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

// Conexión a MongoDB
const uri = "mongodb+srv://dlopnun1503:Dl132301@cluster0.t0zmu.mongodb.net/Instituto?retryWrites=true&w=majority";
const client = new MongoClient(uri);
let db, collection;

async function connectDB() {
  try {
    console.log("Intentando conectar a MongoDB...");
    await client.connect();
    db = client.db("Instituto");
    collection = db.collection("alumnos");
    console.log("Conectado a MongoDB");

    // Iniciar el servidor solo después de conectarse a MongoDB
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Error conectando a MongoDB:", error.message);
    process.exit(1); 
  }
}

connectDB();

// API para obtener alumnos 
app.post("/api/alumnos/listar", async (req, res) => {
  try {
    const alumnos = await collection.find({}).toArray();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener alumnos", error });
  }
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
  res.sendFile(path.join(__dirname, "index.html"));
});
