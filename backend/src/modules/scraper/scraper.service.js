const { PlaywrightCrawler, Configuration } = require('crawlee')

const getCrawler = (requestHandler, failedRequestHandler) =>
  new PlaywrightCrawler(
    {
      requestHandler,
      failedRequestHandler,
      maxRequestRetries: 0,
      maxSessionRotations: 1000,
      navigationTimeoutSecs: 15,
      requestHandlerTimeoutSecs: 15
    },
    new Configuration({
      persistStorage: false,
      availableMemoryRatio: 1
    })
  )

module.exports = { getCrawler }
