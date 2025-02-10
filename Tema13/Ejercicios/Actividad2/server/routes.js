import express from "express";
import { db } from "./db.js";

const router = express.Router();
const collection = db.collection("alumnos"); // Nombre de la colección

// Obtener todos los registros
router.get("/alumnos", async (req, res) => {
  const alumnos = await collection.find({}).toArray();
  res.json(alumnos);
});

// Agregar un nuevo registro
router.post("/alumnos", async (req, res) => {
  const { nombre, apellido } = req.body;
  if (!nombre || !apellido) return res.status(400).send("Faltan datos");

  await collection.insertOne({ nombre, apellido });
  res.json({ message: "Alumno agregado" });
});

export default router;
