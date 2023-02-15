"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bridge_1 = require("bridge");
const express_1 = __importDefault(require("express"));
const port = 8080;
const app = (0, express_1.default)();
const helloHandler = (0, bridge_1.handler)({
    resolve: () => `Hello you!`
});
const routes = {
    hello: (0, bridge_1.method)({ GET: helloHandler })
};
app.use('/api', (0, bridge_1.initBridge)({ routes }).expressMiddleware());
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
module.exports = app;
