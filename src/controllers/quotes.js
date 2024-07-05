const axios = require('axios');

const getQuote = async (req, res) => {
  const { srcChainId, fromTokenAddress, amount, destChainId, toTokenAddress } = req.body;
  
  // try {
  //   const response = await axios.get(`https://open-api.xy.finance/v1/quote`, {
  //     params: { srcChainId, fromTokenAddress, amount, destChainId, toTokenAddress },
  //     headers: { 'accept': 'application/json' }
  //   });
  //   res.json(response);
  // } catch (error) {
  //   res.status(500).json({ message: 'Error fetching quote' });
  // }
  const response = {
    "isSuccess": true,
    "msg": "Quotation success.",
    "fromTokenAddress": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "toTokenAddress": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    "fromTokenAmount": "500000000000000000",
    "contractAddress": "0x4315f344a905dC21a08189A117eFd6E1fcA37D57",
    "srcChainId": "1",
    "destChainId": "56",
    "xyFee": {
        "amount": 0.00023957547369888,
        "symbol": "ETH"
    },
    "quote": {
        "sourceChainSwaps": null,
        "crossChainSwap": {
            "dexNames": [
                "yBridge"
            ],
            "aggreagatorName": null,
            "fromToken": {
                "tokenAddress": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                "chainId": "1",
                "symbol": "ETH",
                "decimals": 18
            },
            "toToken": {
                "tokenAddress": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
                "chainId": "56",
                "symbol": "ETH",
                "decimals": 18
            }
        },
        "destChainSwaps": {
            "dexNames": [
                "PancakeSwap V3"
            ],
            "aggreagatorName": "OKX DEX",
            "fromToken": {
                "tokenAddress": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
                "chainId": "56",
                "symbol": "ETH",
                "decimals": 18
            },
            "toToken": {
                "tokenAddress": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                "chainId": "56",
                "symbol": "BNB",
                "decimals": 18
            }
        },
        "toTokenAmount": "2.9463123661308797"
    },
    "toTokenAmount": "2946312366130879700",
    "fromTokenValue": 1650.31,
    "toTokenValue": 1647.3716332747588,
    "crossChainFee": null,
    "statusCode": "0",
    "estimatedGas": 150000,
    "minimumReceived": "2.916849242469571",
    "estimatedTransferTime": 300,
    "transactionCounts": 2
}
res.json(response);
};

module.exports = { getQuote };
