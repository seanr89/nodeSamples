import express from 'express';
import config from '../config/default';
import connect from './db/connect';
import log from './logger';
import routes from './routes/routes';

const app = express();
//Support JSON and encoding across all routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(config.port, config.host, () => {
    log.info(`Server listing at http://${config.port}:${config.host}`);

    //Run DB Connect for MongoDB
    connect();

    //Connect Update API Routes
    routes(app);
});
