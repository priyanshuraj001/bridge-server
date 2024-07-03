const axios = require('axios');

const getTokens = async (req, res) => {
  try {
    const response = await axios.get('https://open-api.xy.finance/v1/recommendedTokens', {
      headers: { 'accept': 'application/json' }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tokens' });
  }
};

module.exports = { getTokens };
