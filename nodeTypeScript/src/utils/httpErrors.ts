import { HTTPClientError } from "./httpClientError";

export class HTTP400Error extends HTTPClientError {
    public readonly statusCode = 400;

    constructor(message: string | object = "Bad Request") {
      super(message);
    }
  }

export class HTTP404Error extends HTTPClientError {
    public readonly statusCode = 404;

    constructor(message: string | object = "Not found") {
      super(message);
    }
  }
