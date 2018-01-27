//importing chai for assertions.
const chai = require('chai');
// chai.should(); if i choose to go with the should style of the chai library i mush call this function.

//importing sinon for creating  spies.
const sinon = require('sinon');

//importing sinon-chai for compatibility between them.
const sinonChai = require('sinon-chai');
chai.use(sinonChai); //making chai use the sinonChai.

//importing rewire to inject spies instead of real functions.(this how andrew does in the course - i think its sucks..)
// const rewire = require('rewire');
// const app = rewire('./app');

const db = require('./db');
const app = require('./app');



describe("Registration",() => {

    it("Should check if handleSignUp really calls the saveUser function",() => {
        //creating a fake user email and password.
        const email = "saarzivon@gmail.com";
        const password = "123abc";

        //creating save user spy and switching it with db.saveUser function.

        // const saveUserSpy = sinon.spy(db,'saveUser');
        //creating save user stub and switching it with db.saveUser function.

        const saveUserStub = sinon.stub(db,'saveUser');

        //the difference between stub and spy is that stubs totally replaces the function ,in contrast of spy ->
        //-> which only "spies" on the function execution (tells which parameter are provided and what was the return)
        //for example if i would have used spy in this case , all the functionality of saveUser would have ran ->
        //-> (the act of saving the user to the db and printing that the user has been saved) and in this test case it is undesirable.

        //calling the function we are testing , with the fake user email and password.
        app.handleSignUp(email,password);

        //thanks to sinon-chai library i can check like this , if the sinon spy has been called with the corresponding fake email and password.

        //if i choose to go with the should style of the chai library this is the code to run:
        // saveUserSpy.should.have.been.calledWith({email,password});

        //if i choose to go with the expect style of the chai library this is the code to run:
        chai.expect(saveUserStub).to.have.been.calledWith({email,password});
    });

    //creating a spy calling it and checking if it has been called.
    it("Should call spy correctly",() => {
        const func = sinon.spy();
        func();

        //thanks to sinon-chai library i can check if the sinon spy has been called with this simple syntax.
        func.should.have.been.called;
    });

    //if i used rewire i should have done this.
    //switching the regular db object that is imported in app to this fake db object.
    //and injecting a sinon spy instead of regular saveUser function.
    // const dbFake = {
    //     saveUser: sinon.spy()
    // };
    // app.__set__('db',dbFake);


});

