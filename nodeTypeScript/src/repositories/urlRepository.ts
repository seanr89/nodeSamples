import { MyConnection } from "../DataConnections/myconnection";
import { URL } from "../models/URL";
import factory from "../parsers/parserFactory";
import { URLParser } from "../parsers/URLParser";

export class URLRepository {

    private conn: MyConnection;
    private parser: URLParser;

    /**
     * base constructor for a repository object
     * @constructor
     */
    constructor() {
        this.conn = new MyConnection();
        this.parser = factory.getParserForObject("URL") as URLParser;
    }

    /**
     * handle the requesting of all url records
     * @param {function} callback : callback method to allow for async response handling
     */
    public getAll(callback: (message: string, res: URL[]) => void) {
        console.log("getAll called");
        this.conn.executeStatement("SELECT * FROM [dbo].[URL]", (error: Error, rowCount: number, rows: any[]) => {
            let results: URL[];
            if (error === undefined) {
                results = this.parser.parseSQLDataToArray(rowCount, rows);
                callback(undefined, results);
            } else {
                callback(error.message, undefined);
            }
        });
    }

    /**
     * handle the saving of the record
     * @param {string} url :
     * @param {function} callback : callback method to allow for async response handling
     */
    public save(url: string, callback: () => void) {
        console.log("save called");
    }
}
