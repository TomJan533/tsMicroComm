import request from 'supertest';
import app from '../../../src/app';


describe('/deleteUser Endpoint', () => {
  it('should return a 200 status and message "deleteUser"', async () => {
    const response = await request(app).delete('/deleteUser');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('deleteUser');
  });
});