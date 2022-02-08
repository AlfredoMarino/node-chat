const config = {
    dbConfig: {
        url: process.env.DB_URL || 'mongodb://localhost:27017/chatdb',
        user: process.env.DB_USER || 'aamv',
        password: process.env.DB_PASSWORD || 'aamv'
    },
    port: process.env.PORT || 3000,
    host: process.env.HOST || "http://localhost",
    publicRoute: process.env.PUBLIC_ROUTE || "/app",
    filesRoute: process.env.FILES_ROUTE || "/files"
}

module.exports = config;