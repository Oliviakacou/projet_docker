const request = require('supertest');
const { server } = require('../index'); // récupère le serveur pour pouvoir le fermer

afterAll(() => {
  server.close(); // ferme le serveur après les tests
});

test('GET /', async () => {
  const res = await request(server).get('/');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello Docker + CI/CD!');
});