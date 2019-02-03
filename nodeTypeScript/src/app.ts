import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import express from "express";
import { URLRouter } from "./routes/url_routes";

class App {

    public app: express.Application;
    public urlRoutes: URLRouter;

    constructor() {
        this.app = express(); // run the express instance and store in app
        this.config();
        this.urlRoutes = new URLRouter();

        this.setupRoutes();
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false,
        }));
    }

    private setupRoutes() {
        this.urlRoutes.getRoutes(this.app);
    }
}

export default new App().app;
