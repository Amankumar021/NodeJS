// error 

class ApiError extends Error {
    constructor(
        statusCode, // HTTP status code
        message = "Something went wrong", // default error message
        errors = [], // detailed error information
        stack = "" // optional stack trace
     ){
        super(message) // call the parent class constructor
        this.statusCode = statusCode; // HTTP status code
        this.data = null; // no data for errors
        this.message = message; // error message
        this.errors = errors; // detailed error information

        if(stack){
            this.stack = stack; // assign provided stack trace
        }else{
            Error.captureStackTrace(this, this.constructor); // capture current stack trace
        }
    } 
}

export { ApiError };