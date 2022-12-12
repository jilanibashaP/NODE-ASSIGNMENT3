const http = require("http");

const fs = require("fs");

const name = process.argv[2]

fs.writeFile("index.html", `<h1>HELLO WORLD</h1> \n <p>this is ${name} </p>`, () => {
  console.log("index")
})

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    else {
      res.write(data)
      res.end();
    }
  })
});
server.listen(5000, () => {
  console.log("server is up at port number 5000");
});
