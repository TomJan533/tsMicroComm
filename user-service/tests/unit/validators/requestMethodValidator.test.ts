import { validateMethod } from '../../../src/validators/requestMethodValidator';
import { Request, Response } from 'express';

describe('validateMethod Middleware', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    mockNext = jest.fn();
  });

  it('should call next() if the method is allowed', () => {
    mockReq.method = 'POST';

    const middleware = validateMethod(['POST', 'GET']);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.status).not.toHaveBeenCalled();
  });

  it('should return 405 Method Not Allowed if the method is not allowed', () => {
    mockReq.method = 'DELETE';

    const middleware = validateMethod(['POST', 'GET']);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(405);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Method DELETE Not Allowed' });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should return 405 Method Not Allowed if the method is not allowed for multiple methods', () => {
    mockReq.method = 'PUT';

    const middleware = validateMethod(['POST', 'GET', 'DELETE']);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(405);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Method PUT Not Allowed' });
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should call next() if the method is allowed for a single route', () => {
    mockReq.method = 'GET';

    const middleware = validateMethod(['GET']);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(mockRes.status).not.toHaveBeenCalled();
  });
});
