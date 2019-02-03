import { URL } from "../models/URL";
import { IParser } from "./IParser";

export class URLParser implements IParser {
    public name: string;

    constructor() {
        this.name = "URL";
    }

    public parseSQLDataToArray(rowCount: number, data: any[]): URL[] {
        console.log("parseSQLDataToArray");

        let result: URL[];
        if (data !== null) {
            result = [];
            data.forEach((element) => {
                const resp = this.parseSQLRowToObject(element);
                if (resp !== undefined) {
                    result.push(resp);
                }
            });
        }
        return result;
    }

    private parseSQLRowToObject(data: any): URL {
        console.log("parseSQLRowToObject");
        if (data !== undefined) {
            const url = new URL(data[0].value, data[1].value);
            return url;
        }
        return undefined;
    }
}
