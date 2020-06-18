import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json("Hola mundo");
});

app.listen(3000, () => {
  console.log("READY localhost:3000");
});
