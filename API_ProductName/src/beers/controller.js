const pool = require('../../db');

const getBeers = (req, res) => {
    pool.query("SELECT * FROM beers", (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getBeers,
}