const { Client } = require("pg");
require("dotenv").config(); // This loads the .env file

async function testConnection() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error("Error: DATABASE_URL environment variable not found.");
    console.error(
      "Please ensure your .env file is in the root directory and is named correctly."
    );
    return;
  }

  console.log("Attempting to connect with the following URL:");
  console.log(connectionString);

  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log(
      "\n✅ Connection successful! The database credentials in your .env file are correct."
    );
  } catch (err) {
    console.error(
      "\n❌ Connection failed! There is a problem with your DATABASE_URL or network connection."
    );
    console.error("Error details:", err.message);
  } finally {
    await client.end();
  }
}

testConnection();
