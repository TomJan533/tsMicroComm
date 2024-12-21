import request from 'supertest';
import app from '../../../src/app';


describe('/createUser Endpoint', () => {
  it('should return a 200 status and message "createUser"', async () => {
    const response = await request(app).post('/createUser');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('createUser');
  });
});
