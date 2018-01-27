const express = require('express');

const app = express();

app.get("/",(req, res) => {
   res.send("Hello World.")
});

app.get("/data",(req, res) => {
    res.send({
        name: "Saar",
        age: 21
    })
});

app.get("/users",(req,res) => {
    res.status(200).send([
        {name:"Omer",age:21},
        {name: "Ori",age:21},
        {name:"Saar",age:21},
        {name:"Amit",age:21}
    ])
});

/*
putting the server instance in a variable because if i want to close the connection to the server i must call server.close()
there is an annoying error when you try to open the connection to the server when its already open, this fucks up the testing of the app.
therefore i export the server variable  - to let the test file close the connection after it runs.
*/
let server = app.listen(3000,() => {
   console.log("listening on port 3000...");
});

module.exports = {
    app: app,
    server: server
};