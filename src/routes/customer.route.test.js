const app = require('../server') ;
const request = require('supertest');

describe('Cutomer End-Points',() =>{
    it('should return a customer',async()=>{
        const res = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hi Get')
    });
});