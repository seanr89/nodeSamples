"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const default_1 = __importDefault(require("../config/default"));
console.log('Hello Sean!');
const app = express_1.default();
app.listen(default_1.default.port, default_1.default.host, () => {
    console.log(`Server listing at http://${default_1.default.port}:${default_1.default.host}`);
    app.get('/', (req, res) => res.send('My first REST API!'));
});
//# sourceMappingURL=app.js.map