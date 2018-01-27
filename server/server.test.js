const request = require('supertest');

//using the chai assertion library because the library from the course is fucked up..
const chai = require('chai');

//adds some more libraries to chai.
chai.should();
chai.use(require('chai-things'));

const app = require('./server').app;

//exporting the server instance.
const server = require('./server').server;

describe("Server tests", () => {

    describe("GET /",() => {

        it("Should return Hello World",(done) => {
            request(app)
                .get("/")
                .expect("Hello World.")
                .end(done);
        });
    });

    describe("GET /data",() => {

        it("Should return Saar json",(done) => {
            request(app)
                .get("/data")
                .expect((res) => {
                    chai.expect(res.body).to.have.property('name','Saar');
                    // chai(res.body).to.have.include({name:'Saar',age:21}) this would work also.
                })
                .end(done)
        });
    });

    describe("GET /users", () => {

        it("Should return my user object",(done) => {
            request(app)
                .get("/users")
                .expect(200)
                .expect((res) => {
                    (res.body).should.include.something.that.deep.equals({name:"Omer",age:21});
                })
                .end(done)
        });

    })  ;

});




//closing the connection to the site after the tests are done  - that way i get away from the annoying error of opening the app->
// when its already open
//this happens because when i auto run the tests file , it will also run the server.js file and there is will start the app b4 i ever close it.
//so it will try to open the app when its already open what will resort in an error.
server.close();