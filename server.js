const express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const app = express()

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpecs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/books", require("./routes/books"));
app.use("/account", require("./routes/accounts"));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);