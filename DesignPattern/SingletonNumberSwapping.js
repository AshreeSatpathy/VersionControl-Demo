class SingletonNumberSwapping {
    static instance = null;  // This will hold the unique instance

    constructor() {
        if (SingletonNumberSwapping.instance) {
            // If an instance already exists, return the existing one
            return SingletonNumberSwapping.instance;
        }
        // Set the first created instance
        SingletonNumberSwapping.instance = this;
        console.log("Creating the Singleton instance");  // Log the creation of the first instance
    }

    // Method to swap two numbers
    SwapNumbers(num1, num2) {
        try {
            if (typeof num1 !== "number" || typeof num2 !== "number") {
                throw new Error("Both inputs must be numbers.");
            }

            // Swapping the numbers using a temporary variable
            let temp = num1;
            num1 = num2;
            num2 = temp;

            // Return swapped numbers
            return [num1, num2];
        } catch (error) {
            console.error("Error: " + error.message);
            return [null, null];  // Return null if error occurs
        }
    }
}

// Function to handle the swapping operation when the user clicks the "Swap Numbers" button
function SwapNumbers() {
    // Get input values from the user
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }

    // Create a new instance of the Singleton class (or use the existing one)
    const numberSwapper = new SingletonNumberSwapping();

    // Swap the numbers using the Singleton instance
    const swappedNumbers = numberSwapper.SwapNumbers(num1, num2);

    // Display the swapped numbers on the webpage
    document.getElementById('outputNum1').textContent = swappedNumbers[0];
    document.getElementById('outputNum2').textContent = swappedNumbers[1];

    const numberSwapper2 = new SingletonNumberSwapping();

    // Log in the console that only one instance is created
    console.log("Are instance1 and instance2 the same?", numberSwapper === numberSwapper2);
}
