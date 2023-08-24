const express = require("express");
const beerRoutes = require("./src/beers/routes");

const app = express();
const port = 6007;

const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,
    optionSuccessStatus:200,
}

app.use(cors(corsOptions))

app.use(express.json());

app.get("/", (req, res)=> {
    res.send("hello world");
})

app.use("/api_productname/v1/beers", beerRoutes);

app.listen(port, () => console.log('running active port'));