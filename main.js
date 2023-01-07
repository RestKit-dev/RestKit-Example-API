const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, resp) {
    resp.send('Hello World !');
})

app.get('/get', function (req, resp) {
    resp.json({ name: 'ditto' })
})

app.post('/post', function (req, resp) {
    resp.send(req.body)
})

app.listen(8081)