module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "busy-panda",
      user: "postgres",
      password: "groot",
    },
  },

  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: false,
    },
  },
};
