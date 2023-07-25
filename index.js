const path = require("path");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // res.writeHead(200, { "Content-Type": "image/x-icon" });
  res.sendFile(path.join(__dirname, "/index.html"));
  //       return res.end();
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "/contact-me.html"));
});

app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "style.css"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

const port = 8080;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// http
//   .createServer((req, res) => {
//     if (req.url === "/favicon.ico") {
//       res.writeHead(200, { "Content-Type": "image/x-icon" });
//       return res.end();
//     }

//     const parsedUrl = url.parse(req.url, true);
//     const pathname = parsedUrl.pathname;

//     let contentType = "text/html";
//     let filePath = "";

//     if (pathname === "/") {
//       filePath = "./index.html";
//     } else if (pathname === "/about" || pathname === "/contact-me") {
//       filePath = `.${pathname}.html`;
//     } else if (pathname === "/style.css") {
//       filePath = "./style.css";
//       contentType = "text/css";
//     } else {
//       filePath = "./404.html";
//       res.writeHead(404, { "Content-Type": "text/html" });
//     }

//     fs.readFile(filePath, (err, content) => {
//       if (err) {
//         res.writeHead(500, { "Content-Type": "text/html" });
//         res.end("Error interno del servidor");
//       } else {
//         res.writeHead(200, { "Content-Type": contentType });
//         res.end(content);
//       }
//     });
//   })
//   .listen(8080);
