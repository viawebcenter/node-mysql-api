import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_PORT,
    DB_DATABASE
} from "./config.js"

export const pool = createPool({
    /*
        host: "69.30.254.202",
        user: "viatech_api",
        password: "Olimpo1963@@",
        port: 3306,
        database: "viatech_api"
    */

    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE

})











