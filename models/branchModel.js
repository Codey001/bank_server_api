import { client } from "../config/database.js";

const getBranchesByBankId = async (bankId) => {
  try {
    const query = `
    SELECT 
        b.name AS bank_name,
        br.bank_id,
        br.branch,
        br.ifsc,
        br.address,
        br.city,
        br.district,
        br.state
    FROM 
        banks b
    INNER JOIN 
        branches br ON b.id = br.bank_id
    WHERE 
        b.id = $1;
`;
    const values = [bankId];

    const res = await client.query(query, values);

    return res.rows;
  } catch (error) {
    console.log("Error fetching banks: ", error);
    return [];
  }
};

export { getBranchesByBankId };
