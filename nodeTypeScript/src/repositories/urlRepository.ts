import { URL } from "url";
import { MyConnection } from "../DataConnections/myconnection";
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
    public getAll(callback: (message: string) => void) {
        console.log("getAll called");
        this.conn.executeStatement("SELECT * FROM [dbo].[URL]", (error: Error, rowCount: number, rows: any[]) => {
            // TODO - handle response
            let results: URL[];
            if (error !== undefined) {
                results = this.parser.parseSQLDataToArray(rows);
            }
            callback(error.message);
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
