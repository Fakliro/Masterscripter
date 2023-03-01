const form = document.getElementById('app-generator-form');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const outputType = formData.get('output-type');
    const codingLanguage = formData.get('coding-language');
    const targetOS = formData.get('target-os');
    const userRolesAndPermissions = formData.get('user-roles-permissions') || '';
    const dataStorageAndRetrieval = formData.get('data-storage-retrieval') || '';
    const thirdPartyIntegrations = formData.get('third-party-integrations') || '';
    const functionalRequirements = formData.get('functional-requirements');
    const nonFunctionalRequirements = formData.get('non-functional-requirements') || '';

    // Build request object
    const requestData = {
        outputType,
        codingLanguage,
        targetOS,
        userRolesAndPermissions,
        dataStorageAndRetrieval,
        thirdPartyIntegrations,
        functionalRequirements,
        nonFunctionalRequirements
    };

    // Send request to ChatGPT API
    fetch('127.0.0.1:3001/chatgpt/gpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Generated code:', data.code);
            // Do something with generated code
        })
        .catch(error => console.error(error));

    // Send request to ChatGPT API
    //   const response = await fetch('https://api.openai.com/v1/engine/davinci-codex/completions', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
    //     },
    //     body: JSON.stringify({
    //       prompt: generatePrompt(requestData),
    //       max_tokens: 1024,
    //       n: 1,
    //       stop: '\n',
    //       temperature: 0.7
    //     })
    //   });

    //   // Parse response data
    //   const responseData = await response.json();
    //   const generatedCode = responseData.choices[0].text.trim();

    //   // Output generated code to console
    //   console.log(generatedCode);
    // }

    // function generatePrompt(requestData) {
    //   const prompt = `Generate ${requestData.outputType} ${requestData.codingLanguage} code for ${requestData.targetOS}.\n\n`;

    //   const optionalInputs = [
    //     { name: 'User Roles and Permissions', value: requestData.userRolesAndPermissions },
    //     { name: 'Data Storage and Retrieval', value: requestData.dataStorageAndRetrieval },
    //     { name: 'Third-Party Integrations', value: requestData.thirdPartyIntegrations },
    //     { name: 'Non-Functional Requirements', value: requestData.nonFunctionalRequirements }
    //   ];

    //   const inputsPrompt = optionalInputs
    //     .filter(input => input.value.trim() !== '')
    //     .map(input => `- ${input.name}: ${input.value}\n`)
    //     .join('');

    //   return `${prompt}${inputsPrompt}\nFunctional Requirements:\n${requestData.functionalRequirements}\n`;
}
