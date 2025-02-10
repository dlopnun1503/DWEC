import { MongoClient, ServerApiVersion } from "mongodb";

const uri = "mongodb+srv://dlopnun1503:Dl132301@cluster0.t0zmu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Crear el cliente con las opciones de API estable
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("Instituto").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

run().catch(console.dir);


