const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: '52.47.54.119', // Use the IP address of the PostgreSQL container
    database: 'eas-index',
    password: 'postgresPassword',
    port: 32768,
  });
// Query the Schema table
pool.query('SELECT * FROM "Schema"', (err, res) => {
  if (err) {
    console.error("Error executing query", err);
    return;
  }
  console.log("Query result:", res.rows);
  pool.end(); // Close the connection pool
});

// const attestationId =
//   "0x635b10b1ada05e5bdb3816c779eb4f074a1f78987ca81bb586c7da6244863f15";
// pool.query(
//   'SELECT * FROM "Attestation" WHERE id=$1',
//   [attestationId],
//   (err, res) => {
//     if (err) {
//       console.error("Error executing query", err);
//       return;
//     }
//     console.log("Query result:", res.rows);
//     pool.end(); // Close the connection pool
//   }
// );
