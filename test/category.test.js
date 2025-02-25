const chai = require("chai");
const chaiHttp = require("chai-http");
const { initializeApp } = require('../server');
const { expect } = chai;

chai.use(chaiHttp);

let server;
let categoryId; // To store the created category ID
let token; // To store the JWT token for authentication

before(async () => {
  server = await initializeApp(); // Initialize the server
  // Assuming you already have a login test or manual login, retrieve the token
  const res = await chai.request(server)
    .post("/users/login")
    .send({
      email: "testuser66@example.com",
      password: "password123"
    });

  token = res.body.data.token; // Store the JWT token for subsequent authenticated requests
});

describe("Category API Tests", () => {
  // Test case for fetching all categories
  it("should get a list of categories", async () => {
    const res = await chai.request(server)
      .get("/category")
      .set("Authorization", `Bearer ${token}`) // Attach the token for authorization
      .query({ page: 1, size: 10 })
      .send();

    expect(res).to.have.status(200);
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.be.an('array');
    expect(res.body.data.length).to.be.greaterThan(0);
  });

 

 

});

after(async () => {
  server.close(); // Close the server after tests are done
});
