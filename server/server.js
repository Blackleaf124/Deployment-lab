const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../public')))

app.listen(4040, () => console.log(`server running on 4040`))