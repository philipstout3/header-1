const express = require('express');
var cors = require('cors');
const app = express();
const port = 3001;
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')))

app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 3001')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))