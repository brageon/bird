const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/translate', async (req, res) => {
  const input = req.body.input;

  // Translate the input to integers
  const translations = [];
  for (const letter of input) {
    const asciiCode = letter.charCodeAt();
    const integer = asciiCode - 96;
    translations.push(integer);
  }

  // Convert the translations to a string and set the response
  const outputText = translations.join(', ');
  res.json({ output: outputText });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
