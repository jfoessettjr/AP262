const pool = require('../../db');
const queries = require('./queries');

const getBeers = (req, res) => {
    pool.query(queries.getBeers,(error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBeersByABV = (req, res) => {
    const abv = parseInt(req.params.abv);
    pool.query(queries.getBeersByABV, [abv], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getBeers,
    getBeersByABV,
}