import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple PDV API",
      version: "1.0.0",
      description: "API documentation for the Simple PDV system",
    },
    servers: [
      {
        url: "https://localhost:3000",
        description: "Local server",
      },
    ],
  },
  apis: [path.join(__dirname, "./routers/**/*.ts")],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};