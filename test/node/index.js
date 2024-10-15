// const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());
const notes = require("./notes.json");

// const app = http.createServer((request, response) => {
//   response.writeHead(200, { "Content-Type": "application/json" });
//   response.end(JSON.stringify(notes));
// });
app.get("/", (request, response) => {
  response.send("<h1>Hello World</h1>");
});

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const id = request.params.id;
  const note = notes.find((item) => Number(item.id) === Number(id));
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes.splice(
    notes.findIndex((note) => note.id === id),
    1
  );
  response.status(204).end();
});

app.post("/api/notes", (request, response) => {
  const maxId = notes.reduce((max, item) => (item.id > max ? item.id : max), 0);
  const body = request.body;
  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    content: body.content,
    important: body.important || false,
    id: maxId + 1,
  };
  notes.push(note);
  response.json(note);
});

const PORT = 3000;

app.listen(3000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
