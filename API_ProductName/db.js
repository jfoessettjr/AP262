const Pool = require("pg").Pool;

const pool = new Pool({
    user: "jtfoess",
    host: "dpg-cjd4aqvdb61s73bm9deg-a",
    database: "beers_f0sb",
    password: "SqBYXwGYkyQ7F6AeRoOJJKeONrheJUCR",
    port: 5432,
});

module.exports = pool;