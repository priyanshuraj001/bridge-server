const axios = require('axios');

const getQuote = async (req, res) => {
  const { srcChainId, fromTokenAddress, amount, destChainId, toTokenAddress } = req.body;
  try {
    const response = await axios.get(`https://open-api.xy.finance/v1/quote`, {
      params: { srcChainId, fromTokenAddress, amount, destChainId, toTokenAddress },
      headers: { 'accept': 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quote' });
  }
};

module.exports = { getQuote };
