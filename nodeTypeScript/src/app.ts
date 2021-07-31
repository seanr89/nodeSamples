import * as bodyParser from 'body-parser'; // used to parse the form data that you pass in the request
import express, { Router } from 'express';
import middleware from './middleware';
import { URLRouter } from './routes/url_routes';
import { applyMiddleware } from './utils';
import errorHandlers from './middleware/errorHandlers';

class App {
    public app: express.Application;
    public urlRoutes: URLRouter;
    public router: Router = express();

    constructor() {
        this.app = express(); // run the express instance and store in app
        applyMiddleware(middleware, this.app);
        this.urlRoutes = new URLRouter(this.router);
        applyMiddleware(errorHandlers, this.router);

        this.setupRoutes();
    }

    private setupRoutes() {
        this.urlRoutes.getRoutes(this.app);
    }
}

export default new App().app;
