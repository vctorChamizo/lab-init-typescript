import express, { Request, Response } from "express";
const {
  booleanTypes,
  numberTypes,
  stringTypes,
  anyTypes,
  arrayTypes,
  objectTypes,
} = require("./exersices");
const app = express();

app.get("/", (req: Request, res: Response) => {
  booleanTypes();
  numberTypes();
  stringTypes();
  anyTypes();
  arrayTypes();
  objectTypes();
  res.status(200).json("Init TypeScript Project!");
});

app.listen(3000, () => {
  console.log("READY localhost:3000");
});
