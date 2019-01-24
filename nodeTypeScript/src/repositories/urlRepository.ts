
export class URLRepository {

    /**
     * base constructor for a repository object
     * @constructor
     */
    constructor() {
        // TODO - implement base objects here!
    }

    /**
     * handle the requesting of all url records
     * @param {function} callback : callback method to allow for async response handling
     */
    public getAll(callback: () => void) {
        console.log("getAll called");
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
