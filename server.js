import express from "express";
import ViteExpress from "vite-express";


const app = express();
const port = 5173;

/* Add your server routes here */

app.get("/random", (req, res) => {
  console.log("Random Number is being generated.")
  const number = Math.floor(Math.random() * 100 + 1);
  console.log(`The generated Number is ${number}`)
  res.send({ number })
});

ViteExpress.listen(app, port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
