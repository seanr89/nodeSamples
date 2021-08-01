"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("../config/default"));
const logger_1 = __importDefault(require("./logger"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = express_1.default();
//Support JSON and encoding across all routes
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(default_1.default.port, default_1.default.host, () => {
    logger_1.default.info(`Server listing at http://${default_1.default.port}:${default_1.default.host}`);
    routes_1.default(app);
});
//# sourceMappingURL=app.js.map