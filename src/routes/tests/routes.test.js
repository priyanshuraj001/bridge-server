const request = require('supertest');
const express = require('express');
const route = require('../../routes/route');

const app = express();
app.use(express.json());
app.use('/', route);

describe('API Endpoints', () => {
  it('GET /tokens - should fetch tokens', async () => {
    const response = await request(app).get('/tokens');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('isSuccess', true);
    expect(response.body).toHaveProperty('recommendedTokens');
    expect(response.body.recommendedTokens).toHaveLength(2);
  });

  it('POST /quotes - should fetch quote', async () => {
    const response = await request(app).post('/quotes').send({
      srcChainId: 1,
      fromTokenAddress: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
      amount: 1000,
      destChainId: 56,
      toTokenAddress: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('routes');
    expect(response.body.routes).toHaveLength(1);
  });
});
