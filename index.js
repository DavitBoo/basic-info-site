const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/favicon.ico") {
      res.writeHead(200, { "Content-Type": "image/x-icon" });
      return res.end();
    }

    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.href;

    let htmlFile;

    if (path === "/about" || path === "/contact-me") {
      htmlFile = fs.readFileSync(`.${path}.html`);
      res.writeHead(200, { "Content-Type": "text/html" });
    } else if (path === "/") {
      htmlFile = fs.readFileSync(`./index.html`);
      res.writeHead(200, { "Content-Type": "text/html" });
    } else {
      htmlFile = fs.readFileSync(`./404.html`);
      res.writeHead(404, { "Content-Type": "text/html" });
    }

    res.end(htmlFile);
  })
  .listen(8080);
