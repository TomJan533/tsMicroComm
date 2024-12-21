import request from 'supertest';
import app from '../../../../src/app';

describe('/createUser Endpoint, RequestMethodValidator', () => {
  it('should return a 200 status for POST requests', async () => {
    const response = await request(app).post('/createUser').send({
      name: 'Test User',
      email: 'test@example.com'
    });

    expect(response.status).toBe(200);
  });

  it('should return a 405 status for GET requests', async () => {
    const response = await request(app).get('/createUser');
    expect(response.status).toBe(405);
  });

  it('should return a 405 status for PUT requests', async () => {
    const response = await request(app).put('/createUser').send({
      name: 'Test User',
      email: 'test@example.com'
    });

    expect(response.status).toBe(405);
  });

  it('should return a 405 status for DELETE requests', async () => {
    const response = await request(app).delete('/createUser');
    expect(response.status).toBe(405);
  });
});
