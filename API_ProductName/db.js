const Pool = require("pg").Pool;

const pool = new pool({
    user: "beers",
    host: "localhost",
    database: "beers",
    port: 5432,
});

module.exports = pool;