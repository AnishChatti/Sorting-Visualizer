const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(`${__dirname}/../Sorting-visualizer`));

app.listen(port, () => {
 console.log('Server is up on port ' + port)
})