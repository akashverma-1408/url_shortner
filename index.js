const express = require('express');
const { connectToMongoDB } = require("./connect")
const urlRoute = require("./routes/url")

const app = express();
const port = 3009;

connectToMongoDB('mongodb://localhost:27017/url-shortner')
    .then(() => console.log('mongodb is connected'));

app.use(express.json());

app.use("/url", urlRoute);

app.listen(port, () => console.log(`server started at port: ${port}`))