// Define a higher-order function named asyncHandler
const asyncHandler = (requestHandler) => {
    // Return an anonymous function that serves as a wrapper around the requestHandler
    return (req, res, next) => {
        // Create a resolved Promise to ensure consistent handling of asynchronous operations
        Promise.resolve(
            // Call the requestHandler function with the provided request, response, and next parameters
            requestHandler(req, res, next)
        ).catch((error) => {
            // If an error occurs during execution of the requestHandler, pass it to the next middleware
            next(error);
        });
    };
};

// Export the asyncHandler function for use in other modules
export  {asyncHandler};
