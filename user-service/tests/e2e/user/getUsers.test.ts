import request from 'supertest';
import app from '../../../src/app';


describe('/getUsers Endpoint', () => {
  it('should return a 200 status and message "getUsers"', async () => {
    const response = await request(app).get('/getUsers');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('getUsers');
  });
});
