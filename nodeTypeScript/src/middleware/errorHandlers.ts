import express, { Router, NextFunction } from "express";
import { Request, Response } from "express";
import { HTTP404Error } from "../utils/httpErrors";
import * as ErrorHandler from "../utils/ErrorHandler";

const handle404Error = (app: express.Application) => {
  app.use((req: Request, res: Response) => {
    throw new HTTP404Error("Method not found.");
  });
};

const handleClientError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.clientError(err, res, next);
  });
};

const handleServerError = (router: Router) => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, res, next);
  });
};

export default [handle404Error];
