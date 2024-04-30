const express = require('express');
const cors = require('cors');
const routes = require('./controllers');
const app = express();
const port = 4000;
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(routes());


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});