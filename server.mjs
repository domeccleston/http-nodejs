import express from "express";

const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello!");
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server listening on port ${process.env.PORT || 4000}`);
});
