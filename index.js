const http = require("http");
const fs = require("fs");
const url = require("url");
// const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      return res.end();
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    let contentType = "text/html";
    let filePath = "";

    if (pathname === "/") {
      filePath = "./index.html";
    } else if (pathname === "/about" || pathname === "/contact-me") {
      filePath = `.${pathname}.html`;
    } else if (pathname === "/style.css") {
      filePath = "./style.css";
      contentType = "text/css";
    } else {
      filePath = "./404.html";
      res.writeHead(404, { "Content-Type": "text/html" });
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Error interno del servidor");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  })
  .listen(8080);
