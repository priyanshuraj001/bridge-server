const mockAxios = jest.genMockFromModule('axios');

mockAxios.get.mockImplementation((url) => {
  if (url.includes('recommendedTokens')) {
    return Promise.resolve({
      data: {
        isSuccess: true,
        msg: "",
        recommendedTokens: [
          {
            address: "0x6985884C4392D348587B19cb9eAAf157F13271cd",
            symbol: "ZRO",
            name: "ZRO",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/28206/standard/ftxG9_TJ_400x400.jpeg",
            chainId: "1",
            types: ["General"]
          },
          {
            address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
            symbol: "ETH",
            name: "ETH",
            decimals: 18,
            logoURI: "https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880",
            chainId: "1",
            types: ["Native"]
          }
        ]
      }
    });
  }

  return Promise.reject(new Error('not found'));
});

mockAxios.post.mockImplementation((url) => {
  if (url.includes('quote')) {
    return Promise.resolve({
      data: {
        success: true,
        routes: [
          {
            srcQuoteTokenAddress: "text",
            srcQuoteTokenAmount: "text",
            dstQuoteTokenAddress: "text",
            slippage: 0,
            srcSwapDescription: {
              chainId: "text",
              provider: "text",
              srcTokenAddress: "text",
              dstTokenAddress: "text",
              srcTokenAmount: "text",
              dstTokenAmount: "text",
              dexNames: ["text"]
            },
            bridgeDescription: {
              provider: "text",
              srcBridgeTokenAddress: "text",
              dstBridgeTokenAddress: "text",
              srcBridgeTokenAmount: "text",
              dstBridgeTokenAmount: "text",
              bridgeContractAddress: "text",
              bridgeFeeAmount: "text",
              bridgeFeeToken: {
                address: "text",
                symbol: "text"
              },
              srcBridgeToken: {
                address: "text",
                symbol: "text"
              },
              dstBridgeToken: {
                address: "text",
                symbol: "text"
              }
            },
            dstSwapDescription: {
              chainId: "text",
              provider: "text",
              srcTokenAddress: "text",
              dstTokenAddress: "text",
              srcTokenAmount: "text",
              dstTokenAmount: "text",
              dexNames: ["text"]
            },
            dstQuoteTokenAmount: "text",
            minReceiveAmount: "text",
            affiliateFeeAmount: "text",
            withholdingFeeAmount: "0",
            routeType: "xswapper_single_chain",
            tags: ["text"],
            contractAddress: "text",
            withholdingFeeToken: {
              address: "text",
              symbol: "text"
            },
            srcQuoteToken: {
              address: "text",
              symbol: "text"
            },
            dstQuoteToken: {
              address: "text",
              symbol: "text"
            },
            srcQuoteTokenUsdValue: "0",
            dstQuoteTokenUsdValue: "0",
            estimatedGas: "0"
          }
        ]
      }
    });
  }

  return Promise.reject(new Error('not found'));
});

module.exports = mockAxios
