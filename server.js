const express = require('express');
const app = express();

const users = [{
    name: 'Fred',
    age: 21
}, {
    name: "joe",
    age: 36
}];

app.get('/', function (req, res) {
    res.send('Hello Express!');
});

app.get('/api/users', function (req, res) {
    res.json(users)
})

app.listen(3000, () => console.log('Listening on port 3000'));
