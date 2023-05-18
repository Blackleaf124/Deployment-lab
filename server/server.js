const express = require('express')
const path = require('path')

const app = express()

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '48b8a757e0f243b297d59471e98a73d7',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

rollbar.info("App up and running!")

app.use(express.json())
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../public')))

app.listen(4040, () => console.log(`server running on 4040`))