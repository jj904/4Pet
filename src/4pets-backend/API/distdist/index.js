"use strict";
// const express = require("express");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const PORT = process.env.PORT || 3001;
// const app = express();
// app.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// }); server.js
//index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const db_1 = require("./db");
// initialize firebase
(0, db_1.initDB)();
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
// define a route handler for the default home page
app.use(express_1.default.json());
app.use("/API", routes_1.default);
// app.get('/', (req, res) => {
//   res.send('Please work');
// })
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map