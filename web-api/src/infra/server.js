const express = require("express");

//Setup variables
const port = 4000;
const server = async () => {
  //creating an express app
  const app = express();

  //Route
  app.post("/story", (req, res) => {
    res.send(`<h1>Hey story here</h1><video controls></video>`);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);

    console.table({
      "App Name": "Covid Anchor API",
      path: `http://localhost:${port}`,
    });
  });
};
module.exports = server;
