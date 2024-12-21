import request from 'supertest';
import app from '../../../src/app';

describe('/updateUser Endpoint', () => {
  it('should return a 200 status and message "updateUser"', async () => {
    const response = await request(app).put('/updateUser');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('updateUser');
  });
});
