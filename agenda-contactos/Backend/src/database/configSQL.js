import _knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

const config = {
    client: 'mysql2',
    connection: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
};

export const knex = _knex(config);