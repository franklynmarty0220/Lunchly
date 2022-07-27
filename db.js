/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql:///lunchlydb");

db.connect();

module.exports = db;
