import { Express, Request, Response, Router } from "express";

export class URLRouter {
    public router: Router;

  /**
   * Initialize the HeroRouter
   * @constructor
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  public routes(app: Express): void {
    app.route("/urls")
    .get((req: Request, res: Response) => {
      res.status(200).send("hi");
      });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  private  init() {
    // this.router.get('/', this.getAll);
  }
}

// Create the urlRouter, and export its configured Express.Router
const urlRouter = new URLRouter();
// export default urlRouter.router;
