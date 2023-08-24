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

const addBeers = (req, res) => {
    const {id, beer, abv, style, brewery} = req.body;
    pool.query(queries.checkBeersExist, [beer], (error, results) => {
        if(results.rows.length){
            res.send("Beer already exists in system");
        }

        // Add new Beer
        pool.query(queries.addBeers, [id,beer, abv, style, brewery], (error, results) => {
            if(error) throw error;
            res.status(201).send("Beer Created Successfully");
        }
    );
  });
};

const updateBeers = (req, res) => {
    const id = parseInt(req.params.id)
    const { beer, abv, style, brewery } = req.body;
        pool.query(queries.updateBeers, [beer, abv, style, brewery, id],(error, results) => {
        if (error) throw error;
        res.status(201).send("Beer Updated Successfully");
      }
    );
  };

  const deleteBeers = (req, res) => {
    const id = parseInt(req.params.id)
        pool.query(queries.deleteBeers, [id], (error, results) => {
        if (error)throw error;
        res.status(201).send("Beer Delete Successfully");
    });
  };
module.exports = {
    getBeers,
    getBeersByABV,
    addBeers,
    updateBeers,
    deleteBeers,
}