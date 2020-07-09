const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(
    `
      <html>
        <head>
          <title>hello</title>
        </head>
        <body>
          <h1>hello</h1>
          <p>world</p>
        </body>
      </html>
    `
  )
})

app.listen(3000, () => {
  console.log('server is running at 3000');
})