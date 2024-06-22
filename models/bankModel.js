import { client } from "../config/database.js";

const getAllBanks = async () => {
  try {
    const res = await client.query("SELECT * FROM banks");
    return res.rows;
  } catch (error) {
    console.log("Error fetching banks: ", error);
    return [];
  }
};

export { getAllBanks };
