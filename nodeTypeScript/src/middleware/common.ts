import parser from "body-parser";
import compression from "compression";
import express, { Router } from "express";
import cors = require("cors");

export const handleCors = (router: Router) =>
  router.use(cors({ credentials: true, origin: true }));

export const handleBodyRequestParsing = (app: express.Application) => {
  console.log("handleBodyRequestParsing");
  // support application/x-www-form-urlencoded post data
  app.use(parser.urlencoded({ extended: true }));
  // support application/json type post data
  app.use(parser.json());
};

export const handleCompression = (app: express.Application) => {
  console.log("handleCompression");
  app.use(compression());
};
