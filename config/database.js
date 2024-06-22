import pg from "pg";
const { Client } = pg;
import dotenv from "dotenv";
dotenv.config();

pg.defaults.ssl = true;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

async function connectdb() {
  console.log("Connecting db ...");

  try {
    await client.connect();
    console.log("Connected to PostgreSQL database");
    return client; // Return the connected client object
  } catch (err) {
    console.error("Error connecting to PostgreSQL database:", err);
    throw err; // Throw the error to handle it outside the function
  }
}

export { connectdb, client };
