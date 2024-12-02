import http from "http";
import fs from "fs";
const port = process.env.PORT || 3000;

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      serveStaticFile(res, "home.html", "text/html");
      break;
    case "/about":
      serveStaticFile(res, "about.html", "text/html");
      break;
    default:
      serveStaticFile(res, "about.html", "text/html");
      break;
  }
});

server.listen(port, () =>
  console.log(
    `server started on port http://127.0.0.1:${port}; ` +
      "press Ctrl-C to terminate...."
  )
);
