import { Request, Response, Router } from "express";
import express = require("express");
import { URLRepository } from "../repositories/urlRepository";

export class URLRouter {
    public router: Router;
    public urlRepo: URLRepository;

  /**
   * Initialize the HeroRouter
   * @constructor
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   *
   * @param app : express application to handles the routes
   */
  public getRoutes(app: express.Application): void {
    app.route("/url")
    .get((req: Request, res: Response) => {
        this.urlRepo.getAll((message: string) => {
          res.status(200).send(message);
        });
      });

    app.route("/url/:urlID")
    .get((req: Request, res: Response) => {
        // Console log out :)
        const id = req.params.urlID;
        console.log("id is:", id);
    });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  private  init() {
    this.urlRepo = new URLRepository();
  }

  /**
   * example callback method to allow method to be triggered
   */
  private callbackMethod() {
    console.log("callback triggered");
  }
}

// Create the urlRouter, and export its configured Express.Router
const urlRouter = new URLRouter();
// export default urlRouter.router;
