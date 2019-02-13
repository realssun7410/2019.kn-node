const express = require('express');
const app = express();
const port = 3500;

app.use(express.static('public'));
app.get('/book/science', (req, res) => {
    var html = `<h1>과학 카테고리</h1>`;
    res.send(html);
});
app.get('/info', (req, res) => {
    var now = new Date();
    var html = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Information</title>
</head>
<body>
    <h1>Information Page</h1>
    <h2>${now}</h2>
</body>
</html>`;
res.send(html);
});

//RESTful
//app.get('/', (req, res) => res.send('Hello World!'));
// app.post('/', (req, res) => res.send('Hello World!'));
// app.put('/', (req, res) => res.send('Hello World!'));
// app.delete('/', (req, res) => res.send('Hello World!'));

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.listen(port, () => console.log(`http://localhost:${port}`));