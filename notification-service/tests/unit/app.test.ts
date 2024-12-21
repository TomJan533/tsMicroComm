import request from 'supertest';
import app from '../../src/app';


describe('/health Endpoint', () => {
  it('should return a 200 status and message "OK"', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });
});
