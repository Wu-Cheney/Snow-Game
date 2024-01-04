const { Pool } = require('pg');

const PG_URI =
  'postgres://qnfcnqvj:LxnOAsH66p-5DYhxE98AoOwP8yv55HAC@castor.db.elephantsql.com/qnfcnqvj';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
