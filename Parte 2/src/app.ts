import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";
import "express-async-errors";

import "./database";

import { router } from "./routes";
import swaggerFile from "./swagger.json";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).send();
    }
    return response.status(500).send();
  }
);

export { app };
