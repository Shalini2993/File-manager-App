const express = require('express')

const PORT = 8080

const app = express()

app.use('/copy', (req, res) => {
    res.json('server')
})

app.listen(PORT, () => {
    console.log('server running at port ' + PORT)
})