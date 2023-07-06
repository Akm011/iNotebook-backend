// entry point of our application
const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

const app = express()
const port = 5000

//if you want to use request.body you have to use one middle-ware
app.use(express.json());

//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})