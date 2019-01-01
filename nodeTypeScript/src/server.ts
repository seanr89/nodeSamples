
import bodyParser from "body-parser";
import express from "express";
import logger from "../utils/logger";

// Create Express server
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
