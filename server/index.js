require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("../server/ctrl/controller");

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db bruh");
  app.listen(SERVER_PORT, () => {
    console.log(`server activated port ${SERVER_PORT}`);
  });
});

app.use(express.json());
app.get("/api/inventory", ctrl.getInventory);
app.post("/api/product", ctrl.createProduct);
app.delete(`/api/product/:id`, ctrl.deleteProduct);
app.put(`/api/inventory/:id`, ctrl.updateProduct)
