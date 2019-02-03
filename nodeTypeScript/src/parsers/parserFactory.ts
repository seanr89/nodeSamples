import { IParser } from "./IParser";
import { URLParser } from "./URLParser";

class ParserFactory {

    constructor() {
        // LOL
    }

    public getParserForObject(objectName: string): IParser {
        console.log("getParserForObject");
        let parser: IParser;

        switch (objectName) {
            case "URL": {
                parser = new URLParser();
            }
        }
        return parser;
    }
}

const factory = new ParserFactory();
export default factory;
