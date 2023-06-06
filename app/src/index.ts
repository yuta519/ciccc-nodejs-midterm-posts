import express, { Request, Response } from "express";

import { DbService } from "./services/db";

const app = express();
const port = 8000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/users", async (req: Request, res: Response) => {
  const users = await DbService.fetchAllUsers();
  console.log(users);
  res.send(users);
});


app.listen(port, () => {
  console.log(`Backend Server starts running...`);
});
