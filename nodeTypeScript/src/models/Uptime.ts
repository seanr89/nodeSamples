
export class Uptime {

    /**
     * constructor of the object
     * @param id : unique id of a stored record
     * @param response :  the response/status code 
     * @param duration : the duration of the request
     */
    constructor(public id: number, public response: number, public duration: number) {
    }
}
