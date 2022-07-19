module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-aw-shop-do-user-11714534-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'xampi'),
      password: env('DATABASE_PASSWORD', 'AVNS_KW96sR_zjC_nyUo'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
