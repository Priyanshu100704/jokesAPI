
const jokes = document.querySelector(".jokes");
const apiUrl = "https://icanhazdadjoke.com/";


const changeStyle = () => {
    fetch(apiUrl, {
        headers: {
            Accept: "application/json", // Ensure JSON response
        },
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(HTTP `error! status: ${res.status}`);
            }
            return res.json(); // Parse the JSON response
        })
        .then((data) => {
            console.log(data); // Debugging
            if (jokes) {
                jokes.innerText = data.joke; // Display the joke
            }
        })
        .catch((error) => {
            console.error("Error fetching joke:", error);
            if (jokes) {
                jokes.innerText = "Oops! Failed to fetch a joke.";
            }
        });
};

jokes?.addEventListener("click", changeStyle);