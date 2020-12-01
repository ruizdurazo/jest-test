const request = require('supertest')
const app = require('../app')

describe('Get Endpoints', () => {
  test('should say hello', async () => {
    const res = await request(app)
      .get('/test')
    //   .post('/test')
    //   .send({
    //     userId: 1,
    //     title: 'test is cool',
    //   })
    // expect(res.statusCode).toEqual(201)
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message')
    expect(res.body.message).toBe('Hello test!')
    // console.log(res.body)
  })
})
