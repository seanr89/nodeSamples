import express from 'express';
import config from '../config/default';

console.log('Hello Sean!');

const app = express();

app.listen(config.port, config.host, () => {
    console.log(`Server listing at http://${config.port}:${config.host}`);

    app.get('/', (req, res) => res.send('My first REST API!'));

    app.get('/healthcheck', (req, res) => res.sendStatus(200));
});
