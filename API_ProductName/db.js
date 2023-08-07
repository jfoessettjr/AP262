const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "Beers",
    password: "periphery8",
    port: 5432,
});

module.exports = pool;