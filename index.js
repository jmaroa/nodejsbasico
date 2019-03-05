const express = require("express");

const app = express();

app.get("/", (req, resp) => {
  return resp.send("Estoy en la ruta HOME");
});

app.get("/app", (req, resp) => {
  return resp.send("Estoy en la ruta APP");
});

app.get("*", (req, resp) => {
  return resp.send("Ups! Page not found");
});

app.listen(3000, () => {
  console.log("Server is running in port 3000...");
});
