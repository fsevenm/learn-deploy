const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

test('GET /api/events should return 200', (done) => {
  request
    .get('/api/events')
    .then((response) => {
      expect(response.status).toBe(200);

      done();
    });
});
