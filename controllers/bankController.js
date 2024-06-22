import { getAllBanks } from '../models/bankModel.js';
import { getBranchesByBankId } from '../models/branchModel.js';

const getBanks = async (req, res) => {
    try {
        const banks = await getAllBanks();
        res.status(200).json(banks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBranchesByBank = async (req, res) => {
    try {
        const { bankId } = req.params;
        const branches = await getBranchesByBankId(bankId);
        res.status(200).json(branches);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export { getBanks, getBranchesByBank };
