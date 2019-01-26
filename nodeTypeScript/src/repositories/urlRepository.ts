import { MyConnection } from "../DataConnections/myconnection";

export class URLRepository {

    private conn: MyConnection;

    /**
     * base constructor for a repository object
     * @constructor
     */
    constructor() {
        this.conn = new MyConnection();
    }

    /**
     * handle the requesting of all url records
     * @param {function} callback : callback method to allow for async response handling
     */
    public getAll(callback: () => void) {
        console.log("getAll called");
        this.conn.executeStatement("SELECT * FROM [dbo].[URL]", (error: Error, rowCount: number, rows: any[]) => {
            // TODO - handle response
        });
        callback();
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
