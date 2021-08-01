"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.get('/', (req, res) => res.send('My first REST API!'));
}
exports.default = default_1;
//# sourceMappingURL=routes.js.map