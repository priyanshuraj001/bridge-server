const express = require('express');
const { getTokens } = require('../controllers/tokens');
const { getQuote } = require('../controllers/quotes');
const { getParams } = require('../controllers/params');


const router = express.Router();

router.get('/tokens', getTokens);
router.post('/quotes', getQuote);
router.post('/params', getParams);



module.exports = router;