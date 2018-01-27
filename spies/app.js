const db  = require('./db');

module.exports.handleSignUp = (email,password) => {
    //check if email already exists.
    db.saveUser({
        email,
        password
    });
    // //sends the welcome email.
};
