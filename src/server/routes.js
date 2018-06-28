const express = require('express');
const router = express.Router();

router.use('/test', require('./test'));


router.use((req, res, next) => res.status(404).json({ 'error': 'Not Found' }));

router.use((err, req, res, next) =>{
  res.status(500).json({ error: err.stack });
})

module.exports = router;