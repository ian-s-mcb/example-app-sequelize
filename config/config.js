module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite',
    session_secret: 'keyboard cat'
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    session_secret: 'keyboard cat'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'postgres',
    use_env_variable: 'DATABASE_URL',
    session_secret: process.env.SESSION_SECRET
  }
};

