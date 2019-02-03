import * as bodyParser from "body-parser"; // used to parse the form data that you pass in the request
import express from "express";
import middleware from "./middleware";
import { URLRouter } from "./routes/url_routes";
import { applyMiddleware } from "./utils";

class App {

    public app: express.Application;
    public urlRoutes: URLRouter;

    constructor() {
        this.app = express(); // run the express instance and store in app
        applyMiddleware(middleware, this.app);
        this.urlRoutes = new URLRouter();

        this.setupRoutes();
    }

    private setupRoutes() {
        this.urlRoutes.getRoutes(this.app);
    }
}

export default new App().app;
