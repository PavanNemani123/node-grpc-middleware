module.exports = {
    development:{
        client: 'postgresql',
        connection: {
            host: 'localhost',
            port: 5432,
            user:'postgres',
            password: 'Qwer1234@',
            database: 'postgres'
        },
        pool: {
            min: 2,
            max: 10
        }
    }
};

