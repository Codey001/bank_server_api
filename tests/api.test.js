import request from 'supertest';
import { router } from '../routes/bank.js';
import app from '../server.js';

app.use('/api', router);

describe('Bank API Endpoints', () => {
    describe('GET /api/banks', () => {
        test('should return a list of banks', async () => {
            const res = await request(app).get('/api/banks');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Array);
        });
    });

    describe('GET /api/banks/:bankId/branches', () => {
        test('should return a list of branches for a bank', async () => {
            const res = await request(app).get('/api/banks/1/branches');
            expect(res.statusCode).toEqual(200);
            expect(res.body).toBeInstanceOf(Array);
        }, 100000);
    });
});



