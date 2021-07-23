const app = require("../app");
const supertest = require("supertest");

beforeAll(() => {
    process.env.NODE_ENV = 'test';
});

test("GET /phones", async () => {
    await supertest(app)
        .get("/phones")
        .expect(200)
        .expect('Content-Type', /json/)
        .then((response) => {
            expect(response.body.success).toBeTruthy();
            expect(typeof response.body.data[0].name).toBe('string');
        });
});