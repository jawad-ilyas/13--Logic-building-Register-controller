// Define a custom error class named ApiError
class ApiError extends Error {
    // Constructor method for initializing an ApiError instance
    constructor(statusCode, message, errors = [], stack = "") {
        // Call the constructor of the superclass (Error) with the provided message
        super(message);
        // Set the statusCode property of the ApiError instance
        this.statusCode = statusCode;
        // Initialize the data property to null
        this.data = null;
        // Set the success property to false
        this.success = false;
        // Set the errors property to the provided errors array
        this.errors = errors;

        // Check if the stack parameter is provided
        if (stack) {
            // Set the stack property to the provided stack trace
            this.stack = stack;
        } else {
            // Capture the stack trace and assign it to the stack property
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
