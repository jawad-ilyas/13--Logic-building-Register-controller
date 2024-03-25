import { app } from "./app";
import connectionDb from "./db/index.db";



const port = process.env.PORT || 3000;
connectionDb()
    .then(() => {

        // Set up an event listener for the "Error" event on the app object
        app.on("Error", (error) => {
            // Log the error message to the console along with the string "Error" as a prefix
            console.log("Error", error);
            // Throw the error again to terminate the current execution context
            throw error;
        });

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log("Error starting the app:", error);
    });
