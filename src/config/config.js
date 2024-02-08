module.exports = {
  development: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "books_database_development",
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.DATABASE_PORT || 3306,
    dialect: "mysql",
  },
  test: {
    username: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "books_database_test",
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.DATABASE_PORT || 3306,
    dialect: "mysql",
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || "books_database_production",
    host: process.env.MYSQL_HOST || "localhost",
    port: process.env.DATABASE_PORT || 3306,
    dialect: "mysql",
  }
}
