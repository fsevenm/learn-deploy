const express = require('express');
const path = require('path');

const app = express();

app.use(
  express.static(
    path.resolve(__dirname, './public')
  )
);

app.get('/', (request, response) => {
  const filePath = path.resolve(__dirname, './views/index.html');
  response.sendFile(filePath);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Client running on port: ${PORT}`);
});
