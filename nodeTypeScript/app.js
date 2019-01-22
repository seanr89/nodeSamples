import express from "express";
import bodyParser from "body-parser";
import logger from "./util/logger";
import { URLRouter } from "./src/routes/url_routes";

// Create Express server
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
