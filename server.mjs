import { createServer } from "http";

createServer((req, res) => {
  console.log(req.body);
  res.write("Hello World!");
  res.end();
}).listen(process.env.PORT || 4000);
