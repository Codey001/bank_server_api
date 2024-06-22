import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/bank.js";
import { connectdb } from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

connectdb().then(
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
);

app.use(bodyParser.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Bank API is running");
  res.status(200);
});


export default app;