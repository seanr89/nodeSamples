
const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  let wait = Math.random() * (600 - 100) + 100;
  //console.log(wait);
  await new Promise(resolve => setTimeout(resolve, wait));
  res.send('Hello World!')
});

app.get('/health', (req, res) => {
  res.send('healthy!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

