const express = require("express");
const router = express.Router();

router.post('/gpt', async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log("first")
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt,
        max_tokens: 1,
        n: 1,
        stop: ['\n']
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`
        }
      }
    );
    res.send(response.data.choices[0].text);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error');
  }
});

module.exports = router;
