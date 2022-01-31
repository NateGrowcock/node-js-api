const express = require('express');
const { get } = require('http');
const app = express()
let name = "Nate";


app.get('/', function (req, res) {
    res.send('Hello ' + name + "!");
})

app.use(express.urlencoded({ extended: true}));

app.use(express.json());


app.post('/echo-body', function (req, res) {

    const body = req.body;

    console.log(body);

    res.send(body);

});


app.post('/echo-query', function (req, res) {

    const query = req.query;

    console.log(query);

    res.send(query);

});

let usersarr = [];
app.post('/users', function (req, res) {
    //const {body} = req;
    //same as next line
    const body = req.body;
    //const {name,age,gender} = body;
    //same as next line
    const name = body.name;
    const age = body.age
    const gender = body.gender;
    const id = body.id;
    const all = {id:users.length+1, name, age, gender, createdDate :  new Date()}
    console.log(all);
    res.send(all);
});

app.get('/user', function (req, res) {
    const { id } = req.query;
    const user = users.find(user => user.id == id);
    res.send(user);
});


app.get('/user', function (req, res) {
    const {name,age,gender} = req.body;
    if(!name || !age ){
        return res.status(400).send("Invalid User Details");
    }
});





app.get('/users', function (req, res) {
    res.send(users);
});


// app.get('/users/:index', function (req, res) {
//    const {index}
//     console.log(req)
// });





app.listen(3000)
console.log("app now listening @http://localhost:3000")