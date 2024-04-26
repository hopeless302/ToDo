const express = require('require');
const app = express();


app.use("/api", (req, res) => {
  res.send("Hello World");
  res.status(200).send({message: "send data"});
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
