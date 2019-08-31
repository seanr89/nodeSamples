import express from "express";
import { Request, Response } from "express";
import { HTTP404Error } from "../utils/httpErrors";

const handle404Error = (app: express.Application) => {
  app.use((req: Request, res: Response) => {
    throw new HTTP404Error("Method not found.");
  });
};

export default [handle404Error];
