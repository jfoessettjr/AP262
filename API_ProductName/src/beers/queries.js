const getBeers = "SELECT * FROM beers";
const getBeersByABV = "SELECT * FROM beers WHERE abv = $1";

module.exports = {
    getBeers,
    getBeersByABV,
}