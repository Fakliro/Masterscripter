const express = require("express");
const axios = require("axios")
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const prompt = turnIntoRequest(req.body);
    console.log("not in func " + prompt)
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 7,
        n: 1,
        stop: ['\n']
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );
    console.log(response.data);
    console.log(response.data.choices[0].text);
    res.send(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

function turnIntoRequest(struct) {
  let str = ''

  if (struct.outputType) { str += struct.output }
  if (struct.codingLanguage) { str += struct.codingLanguage }
  if (struct.targetOS) { str += struct.targetOS }
  if (struct.userRolesAndPermissions) { str += struct.userRolesAndPermissions }
  if (struct.dataStorageAndRetrieval) { str += struct.dataStorageAndRetrieval }
  if (struct.thirdPartyIntegrations) { str += struct.thirdPartyIntegrations }
  if (struct.functionalRequirements) { str += struct.functionalRequirements }
  if (struct.nonFunctionalRequirements) { str += struct.nonFunctionalRequirements }

  console.log("in func " + str)

  return str;
}

module.exports = router;
