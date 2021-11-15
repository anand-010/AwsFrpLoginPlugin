var express = require('express')
const bodyParser = require("body-parser");
var app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

// POST method route
app.post('/handler', function (req, res) {
        console.log(req.body);
 res.send(JSON.stringify({
    "reject": false,
    "unchange": true
}
))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})