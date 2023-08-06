const express = require('express');
const app = express();

app.use(express.json());

// Array for beers database
const beers = [{
    id: 1,
    beer: 'Amber'
},
{
    id: 2,
    beer: 'Bock'
},
{
    id: 3,
    beer: 'Brown Ale'
},
{
    id: 4,
    beer: 'Cream Ale'
},
{
    id: 5,
    beer: 'Dunkel'
},
{
    id: 6,
    beer: 'Gose'
},
{
    id: 7,
    beer: 'Kolsch'
},
{
    id: 8,
    beer: 'Porter'
},
{
    id: 9,
    beer: 'Stout'
},
{
    id: 10,
    beer: 'Sour'
},];

// Get all beers
app.get('/apis/beers', (req, res)=> {
    res.send(beers);
});

// Post
app.post('/apis/beers', (req,res)=> {
    const mybeers = {
        id: beers.length + 1,
        beer: req.body.beers
    }

    beers.push(mybeers);
    res.send(mybeers);
})

// Put
app.put('/apis/beers/:id', (req, res)=> {
    const mybeers = beers.find(t => t.id === parseInt(req.params.id));
    if (!mybeers) return res.status(404).send('The beer with the ID was not found');

    mybeers.beers = req.body.beers;
    res.send(mybeers);
})

// Delete
app.delete('/apis/beers/:id', (req, res)=> {
    const mybeers = beers.find(t => t.id === parseInt(req.params.id));
    if (!mybeers) return res.status(404).send('The beer with the ID was not found');

    const index = indexOf(mybeers);
    beers.splice(index, 1);
    res.send(mybeers);
});


// Configuration
const port = process.env.port || 6006;
app.listen(port,()=> console.log('Listening on port ${port}'));