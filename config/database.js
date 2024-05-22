// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", 'db-postgresql-nyc3-20591-do-user-14119558-0.c.db.ondigitalocean.com'),
//       port: env("DATABASE_PORT", 25060),
//       database: env("DATABASE_NAME", 'defaultdb'),
//       user: env("DATABASE_USERNAME", 'doadmin'),
//       password: env("DATABASE_PASSWORD", 'AVNS_1ECDAmPq9D2dSTz82wK'),
//       schema: env("DATABASE_SCHEMA", 'public'),
//     },
//   },
// });

const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
  },
});
