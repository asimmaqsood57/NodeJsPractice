const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const home = fs.readFileSync("home.html");
const about = fs.readFileSync("about.html");
const contact = fs.readFileSync("contact.html");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  console.log(req.url);
  url = req.url;
  res.setHeader("Content-Type", "text/html");
  if (url == "/home.html") {
    res.end(home);
  } else if (url == "/about.html") {
    res.end(about);
  } else if (url == "/contact.html") {
    res.end(contact);
  } else {
    res.statusCode = 404;
    res.end("<h1>404 Not found</h1>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
