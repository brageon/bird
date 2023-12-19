const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/translate', (req, res) => {
  // Retrieve the input from the request body
  const input = req.body.input;

  // Convert the input to integers
  const translations = [];
  for (const letter of input) {
    const asciiCode = letter.charCodeAt();
    const integer = asciiCode - 96;
    translations.push(integer);
  }

  // Concatenate the translations into a string
  const outputText = translations.join(', ');

  // Send the response back to the client
  res.send({ output: outputText });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
