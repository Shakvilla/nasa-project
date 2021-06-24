const request = require('supertest');
const app = require('../../app');

describe('Test GET /launches', ()=> {

  test('It should respond with 200 success', async () => {
  

    const response = await request(app)
      .get('/launches')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test POST /launch', () => {

  test('It should respond with 201 created', async () => {

    const completeLaunchData = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-186 f',
      launchDate: 'January 4, 2023'
    }

    const launchDataWithoutDate = {

      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-186 f'
    }

    const response = await request(app)
      .post('/launches')
      .send(completeLaunchData)
      .expect('Content-Type', /json/)
      .expect(201);
    expect(response.body).toMatchObject(launchDataWithoutDate);
  });

  test('It should catch missing required properties', () => {});
  test('It should catch invalid dates', () => {})
}); 