const https = require('https');
const next = require("next");
const routes = require("./routes");

const app = next({
  dev: process.env.NODE_ENV !== "production",
});

const server = https.createServer(options, (req, res) => {
  // handle requests here
  const handler = routes.getRequestHandler(app);
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
