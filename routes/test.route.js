const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
  res.send({ message: 'Hello test!' })
})

module.exports = router
