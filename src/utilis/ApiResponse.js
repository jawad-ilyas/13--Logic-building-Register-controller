// class ApiResponse {
//     constructor(statusCode, data, message = "Success") {
//         // Validate statusCode parameter
//         if (typeof statusCode !== "number" || statusCode < 100 || statusCode >= 600) {
//             throw new Error("Invalid statusCode. Must be a number between 100 and 599.");
//         }

//         // Validate data parameter
//         if (typeof data === "undefined") {
//             throw new Error("Data parameter is required.");
//         }

//         this.status = statusCode;
//         this.data = data;
//         this.message = message;
//         this.success = this.isSuccess(statusCode);
//     }

//     // Method to determine if the response is successful
//     isSuccess(statusCode) {
//         return statusCode >= 200 && statusCode < 400;
//     }
// }


class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        // Initialize ApiResponse object with status code, data, and message
        this.status = statusCode,
            this.data = data,
            this.message = message,
            // Determine success based on status code
            this.success = statusCode < 400
    }
}

export {ApiResponse}