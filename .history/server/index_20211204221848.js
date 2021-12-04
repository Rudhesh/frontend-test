const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/chocolates', (_, res) => {
  try {
    const buffer = fs.readFileSync('chocolates.json');
    const json = JSON.parse(buffer);
    res.json(json);
  } catch (e) {
    res.status(500).send('something went wrong');
  }
});

app.post('/open/chocolate', (req, res) => {
  try {
    const { day } = req.body;
    console.log(day);
    if (!day || day < 0 || day > 31) res.status(400).send('bad request');

    const buffer = fs.readFileSync('chocolates.json');
    const chocolateMap = JSON.parse(buffer);
    chocolateMap[day - 1] = { day, status: 'open' };

    const json = JSON.stringify(chocolateMap);
    fs.writeFileSync('chocolates.json', json);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send('something went wrong');
  }
});

app.post('/eat/chocolate', (req, res) => {
  try {
    const { day } = req.body;
    if (!day || day < 0 || day > 31) res.status(400).send('bad request');

    const buffer = fs.readFileSync('chocolates.json');
    const chocolateMap = JSON.parse(buffer);
    chocolateMap[day - 1] = { day, status: 'empty' };

    const json = JSON.stringify(chocolateMap);
    fs.writeFileSync('chocolates.json', json);
    res.sendStatus(200);
  } catch (e) {
    res.status(500).send('something went wrong');
  }
});

app.listen(5001, () => {
  console.log(`App listening on http://localhost:${5001}`);
});
