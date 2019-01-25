import { Connection } from "tedious";
import * as data from "../../config/sqlConn.json";
import { SQLParam } from "../models/SqlParam";

export class MyConnection {

    public conn: Connection;

    /**
     * @constructor
     */
    constructor() {
        // This is the base object constructor
        const configDetails = data.default;
        this.conn = new Connection(configDetails);
    }

    public executeStatement(statement: string, callback: () => void) {
        // LOL
    }

    public executeInsert(statement: string, parameters: SQLParam[], callback: () => void) {
        // LOL
    }
}
