const { Pool } = require("pg");

// Configure the connection to your PostgreSQL database
const pool = new Pool({
  user: "postgres",
  host: "172.18.0.2", // Use the IP address of the PostgreSQL container
  database: "eas-index",
  password: "postgresPassword",
  port: 5432,
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
