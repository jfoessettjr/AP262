const getBeers = "SELECT * FROM beers";
const getBeersByABV = "SELECT * FROM beers WHERE abv = $1";
const checkBeersExist = "SELECT b FROM beers b WHERE b.beer = $1";
const addBeers = 
"INSERT INTO beers (id,beer,abv,style,brewery) VALUES($1,$2,$3,$4,$5)";
const updateBeers = "UPDATE beers SET beer = $1, abv = $2, style = $3, brewery = $4 WHERE id = $5 RETURNING id";
const deleteBeers = "DELETE FROM beers WHERE id = $1";

module.exports = {
    getBeers,
    getBeersByABV,
    checkBeersExist,
    addBeers,
    updateBeers,
    deleteBeers,
}