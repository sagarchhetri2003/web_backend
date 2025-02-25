const chai = require("chai");
const chaiHttp = require("chai-http");
const { initializeApp } = require('../server');  // Import the initializeApp function
const { expect } = chai;

chai.use(chaiHttp);

let server; // Declare server variable

before(async () => {
  server = await initializeApp(); // Initialize the server
});

describe("User API Tests", () => {
  it("should register a new user", async () => {
    const res = await chai.request(server)
      .post("/users/register")
      .send({
        name: "Test User",
        email: "testuser36@example.com",
        password: "password123",
        mobile_no: "9876543211"
      });

    expect(res).to.have.status(200);
    expect(res.body.success).to.be.true;
  });

  it("should fail to register a user if email already exists", async () => {
    const res = await chai.request(server)
      .post("/users/register")
      .send({
        name: "Existing User",
        email: "testuser36@example.com",  // Using an already registered email
        password: "password123",
        mobile_no: "9876543212"
      });

    expect(res).to.have.status(409);
    expect(res.body.success).to.be.false;
    expect(res.body.msg).to.equal("User Already Exists!!");
  });


  it("should login the user and return a JWT token", async () => {
    const res = await chai.request(server)
      .post("/users/login")
      .send({
        email: "testuser36@example.com",
        password: "password123"
      });

    expect(res).to.have.status(200);
    expect(res.body.success).to.be.true;
    expect(res.body.data).to.have.property("token");
  });

  it("should fail to login with incorrect password", async () => {
    const res = await chai.request(server)
      .post("/users/login")
      .send({
        email: "testuser36@example.com",
        password: "wrongpassword"
      });

    expect(res).to.have.status(401);
    expect(res.body.success).to.be.false;
    expect(res.body.msg).to.equal("Email or Password Incorrect!!");
  });


  

  // Add your other test cases here...
});


after(async () => {
  server.close(); // Close the server after tests are done
});
