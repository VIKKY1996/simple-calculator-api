const request = require('supertest');
const app = require('./app');

test('adds 2 + 3 = 5', async () => {
  const response = await request(app).get('/add?a=2&b=3');
  expect(response.body.result).toBe(5);
});

test('subtracts 5 - 2 = 3', async () => {
  const response = await request(app).get('/subtract?a=5&b=2');
  expect(response.body.result).toBe(3);
});
