import { URL } from "../models/URL";

export class URLParser implements IParser {
    public name: string;

    constructor() {
        this.name = "URL";
    }

    public parseSQLDataToArray(rowCount: number, data: any[]): URL[] {
        console.log("parseSQLDataToArray");

        let result: URL[];
        if (data !== null) {
            data.forEach((element) => {
                const resp = this.parseSQLRowToObject(element);
                result.push(resp);
            });
        }
        return result;
    }

    private parseSQLRowToObject(data: any): URL {
        console.log("parseSQLRowToObject");
        if (data !== null) {
            const url = new URL(data[0].value, data[1].value);
            return url;
        }
        return undefined;
    }
}
