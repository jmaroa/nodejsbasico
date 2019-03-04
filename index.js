const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./resources/my_page.html", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.end(data);
  });
});

// 65500 puertas de entrada tiene un servidor
console.log("Iniciando server....");
server.listen(3000);
