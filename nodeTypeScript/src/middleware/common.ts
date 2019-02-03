
import parser from "body-parser";
import compression from "compression";
import express from "express";

export const handleBodyRequestParsing = (app: express.Application) => {
    // support application/x-www-form-urlencoded post data
    app.use(parser.urlencoded({ extended: true }));
    // support application/json type post data
    app.use(parser.json());
  };

export const handleCompression = (app: express.Application) => {
    app.use(compression());
  };
