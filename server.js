const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));
console.log(__dirname);

// GET Route for homepage
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, ''))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));