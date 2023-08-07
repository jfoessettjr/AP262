const express = require("express");
const beerRoutes = require("./src/beers/routes");

const app = express();
const port = 6007;

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("hello world");
})

app.use("/api_productname/v1/beers", beerRoutes);

app.listen(port, () => console.log('running active port'));