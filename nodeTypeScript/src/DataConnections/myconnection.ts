import { Connection, Request, TediousType } from "tedious";
import * as data from "../../config/sqlConn.json";
import { SQLParam } from "../models/SqlParam";

export class MyConnection {

    public conn: Connection;

    /**
     * @constructor
     */
    constructor() {
        // This is the base object constructor
        const configDetails = data.connection;
        this.conn = new Connection(configDetails);
    }

    /**
     * handle the execution of a SQL database statement
     * @param sql
     * @param [Function] callback(Error, number, any[])
     */
    public executeStatement(sql: string, callback: (error: Error, rowCount: number, rows: any[]) => void) {
        console.log("executeStatement");
        this.openConnection();

        const req = new Request(sql, (error: Error, rowCount: number, rows: any[]) => {
            callback(error, rowCount, rows);

            req.on("requestCompleted", () => {
                this.closeConnection();
            });
        });
        this.conn.execSql(req);
    }

    /**
     *
     * @param sql
     * @param parameters
     * @param callback
     */

    public executeInsert(sql: string, parameters: SQLParam[], callback: () => void) {
        console.log("executeInsert");

        const req = new Request(sql, (error: Error, rowCount: number, rows: any[]) => {
            if (error !== null) {
                // we got a problem
            }
            // loop through and add all params if requested
            for (const param of parameters) {
                req.addParameter(param.name, param.type, param.value);
            }

            req.on("requestCompleted", () => {
                this.closeConnection();
            });
        });

        this.conn.execSql(req);
    }

    /**
     * initiate the opening of a sql connection
     */
    private openConnection() {
        this.conn.on("connect", (err: Error) => {
            // check if there is an error and so forth
        });
    }

    /**
     * close the database connection
     */
    private closeConnection() {
        // Not sure if directly required but it is useful
        this.conn.close();
    }
}
