function sendInput() {
    const inputField = document.getElementById("inputField");
    const userInput = inputField.value;
    const apiUrl = "https://api.openai.com/v1/engines/davinci-codex/completions";
    const apiKey = "your_api_key_here";

    axios.post(apiUrl, {
        prompt: userInput,
        temperature: 0.5,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        }
    })
        .then(response => {
            const outputField = document.getElementById("output");
            const apiResponse = response.data.choices[0].text;
            outputField.innerHTML = apiResponse;
        })
        .catch(error => {
            console.log(error);
        });
}
