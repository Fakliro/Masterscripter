const inputs = [{ name: "What is the product", inputType: "text", options: "" },
{ name: "What is the objective/purpose", inputType: "text", options: "" },
{ name: "Enviorment", inputType: "text", options: "" },
{ name: "Further enviorment description", inputType: "text", options: "" },
{ name: "Usage methodolgy/interaction", inputType: "text", options: "" },
{ name: "Functional requirements", inputType: "text", options: "" },
{ name: "Desired outcome", inputType: "text", options: "" },
{ name: "Coding language", inputType: "text", options: "" },
{ name: "Third party API integrations", inputType: "text", options: "" },
{ name: "Depends on", inputType: "text", options: "" },
{ name: "Do not use", inputType: "text", options: "" },
{ name: "Is there any System limitations", inputType: "text", options: "" },
{ name: "estethic requirements", inputType: "text", options: "" },
{ name: "Data storage", inputType: "text", options: "" }];

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
    fetch('http://192.168.153.1:8000/chatgpt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
    })
        .then(data => {
            console.log('Generated code:', data);
            // Do something with generated code
        })
        .catch(error => console.error(error));
}
