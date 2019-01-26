import { TediousType } from "tedious";

export class SQLParam {

    constructor(public name: string, public value: string, public type: TediousType) {
        // todo
    }
}
