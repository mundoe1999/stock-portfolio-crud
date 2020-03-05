const express = require('express');
const app = express();



const PORT = 3001;

app.get('/', (req,res) => {
  res.send("Connection made to API")
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))