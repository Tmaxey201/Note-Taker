const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));


module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(data);
  });
  app.get("/api/notes/:id", (req, res) => {
    res.json(data[Number(req.params.id)]);
  });

}