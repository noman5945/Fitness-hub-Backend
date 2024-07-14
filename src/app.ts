import { Application, Request, Response } from "express";
import express from "express";
import cors from "cors";
import { allRoutes } from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

app.use("/api/v1/", allRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Fitness Backend Server Running");
});

app.all("*", (req: Request, res: Response) => {
  res.send("Route dont exist.");
});

export default app;
