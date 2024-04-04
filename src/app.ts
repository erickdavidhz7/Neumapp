import express  from "express";
import cors from "cors";
import https from "node:https";
import fs from "fs";
import { port, sslPathOutsideRep } from "./utils/constants";

//* ----------------Server configuration -----------------

const app = express();
const routes = require ("./routes/router.ts")

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

//Llamo al router principal
app.use('/', routes)
// app.get("/", (req, res) => {
//   res.status(200).send(`
//   <h1>Welcome to Neuma's backend server</h1>
//   <h2>Code: 200</h2>
//   <p>Good request</p>
//   `);
// });

https.createServer({
  cert: fs.readFileSync(sslPathOutsideRep + "/fullchain.pem"),
  key: fs.readFileSync(sslPathOutsideRep + "/privkey.pem")
}, app).listen(port, () => {
  // local testing
    //console.log(`Server is listening at https://localhost:${port}/`);
  // For the deployment
  console.log(`Server is listening at https://neumapp.site:${port}/`);
});