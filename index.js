const app = require('./app')

const port = 3030
app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
  })