// Plesk Passenger entry point. Build with npm run build before restarting.
const http = require("node:http");
const next = require("next");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
const app = next({ dev: false, dir: __dirname });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((request, response) => {
    handle(request, response).catch((error) => {
      console.error("Request failed", error);
      if (!response.headersSent) response.statusCode = 500;
      response.end("Internal Server Error");
    });
  });
  server.listen(process.env.PORT || 3000);
}).catch((error) => {
  console.error("Application startup failed", error);
  process.exit(1);
});
