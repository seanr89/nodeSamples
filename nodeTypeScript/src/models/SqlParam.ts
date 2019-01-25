import { TediousTypes } from "tedious";

export class SQLParam {

    constructor(public name: string, public value: string, public type: TediousTypes) {
        // todo
    }
}
