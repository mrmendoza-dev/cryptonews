

// 100 Articles and 10 Videos
const data = {
  data: [
    {
      news_url: "https://www.youtube.com/watch?v=0837r0XRzFU",
      image_url:
        "https://crypto.snapi.dev/images/v1/3/k/warren-buffett-bashes-bitcoin-at-annual-berkshire-hathaway-meeting-135763.jpg",
      title:
        "Warren Buffett bashes bitcoin at annual Berkshire Hathaway meeting",
      text: "#WarrenBuffett #BerkshireHathwaway #bitcoin #YahooFinance Yahoo Finance reporter David Hollerith discusses Warren Buffett's take on bitcoin at the 2022 Berkshire Hathaway Annual shareholders meeting. Don't Miss: Valley of Hype: The Culture That Built Elizabeth Holmes WATCH HERE: https://youtu.be/Sb179GLPNYE Watch the 2021 Berkshire Hathaway Annual Shareholders Meeting on YouTube: https://youtu.be/gx-OzwHpM9k Subscribe to Yahoo Finance: https://yhoo.it/2fGu5Bb About Yahoo Finance: At Yahoo Finance, you get free stock quotes, up-to-date news, portfolio management resources, international market data, social interaction and mortgage rates that help you manage your financial life.",
      source_name: "Yahoo Finance",
      date: "Mon, 02 May 2022 12:44:22 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Video",
      tickers: ["BTC"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=wRB5cVKiEpI",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/d/charlie-munger-says-dont-put-bitcoin-in-your-retirement-account-shorts-135825.jpg",
      title:
        "Charlie Munger says don't put bitcoin in your retirement account #Shorts",
      text: "Charlie Munger is still down on bitcoin. The investor responded to an audience member question at the 2022 Berkshire Hathaway shareholders meeting, asking what single stock they would invest in given how high inflation has been rising.",
      source_name: "CNBC Television",
      date: "Mon, 02 May 2022 14:26:50 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Video",
      tickers: ["BTC"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=CsEU_EfmFb4",
      image_url:
        "https://crypto.snapi.dev/images/v1/o/y/aave-ceo-responds-to-temporary-twitter-ban-135900.jpg",
      title: "Aave CEO Responds to Temporary Twitter Ban",
      text: "Aave Founder and CEO Stani Kulechov joins Emily Chang to talk about how, after joke-tweeting he had been named Twitter's interim CEO, his account was briefly suspended by the social media giant. He shares his views on open sourcing Twitter and free speech.",
      source_name: "Bloomberg Technology",
      date: "Mon, 02 May 2022 19:32:44 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Video",
      tickers: ["AAVE"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=ICbNJp5IIig",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/d/bitcoin-support-at-30k-32k-btc-mining-esg-concerns-in-focus-136251.jpg",
      title: "Bitcoin Support At $30K-$32K, BTC Mining ESG Concerns in Focus",
      text: '"All About Bitcoin" host Christine Lee speaks to Michele Schneider of Marketgauge Group for her insights on the market as bitcoin price headed lower. Plus, a conversation on bitcoin mining with Eng Taing of Touzi Capital.',
      source_name: "Coindesk",
      date: "Tue, 03 May 2022 14:44:51 -0400",
      topics: ["mining"],
      sentiment: "Negative",
      type: "Video",
      tickers: ["BTC"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=gTkUOQxeU4Y",
      image_url:
        "https://crypto.snapi.dev/images/v1/i/j/sec-boosts-crypto-unit-ethereum-gas-fees-soar-and-congress-stance-on-crypto-cnbc-crypto-world-136274.jpg",
      title:
        "SEC boosts crypto unit, Ethereum gas fees soar, and Congress' stance on crypto: CNBC Crypto World",
      text: "CNBC Crypto World features the latest news and daily trading updates from the digital currency markets and provides viewers with a look at what's ahead with high-profile interviews, explainers, and unique stories from the ever-changing crypto industry. On today's show, Brian Brooks, CEO of BitFury and former acting comptroller of the currency under President Trump, discusses where Congress stands on regulation of crypto in the U.S. 00:00 - CNBC Crypto World, May 3, 2022 0:27 - Crypto's flat trading day 0:44 - The headlines 2:40 - Brian Brooks of BitFury » Subscribe to CNBC TV: https://cnb.cx/SubscribeCNBCtelevision » Subscribe to CNBC: https://cnb.cx/SubscribeCNBC Turn to CNBC TV for the latest stock market news and analysis.",
      source_name: "CNBC Television",
      date: "Tue, 03 May 2022 15:10:38 -0400",
      topics: ["regulations"],
      sentiment: "Positive",
      type: "Video",
      tickers: ["ETH"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=gTkUOQxeU4Y",
      image_url:
        "https://crypto.snapi.dev/images/v1/c/l/crypto10-135481-136274.jpg",
      title:
        "SEC boosts crypto unit, Ethereum gas fees soar, and Congress' stance on crypto: CNBC Crypto World",
      text: "CNBC Crypto World features the latest news and daily trading updates from the digital currency markets and provides viewers with a look at what's ahead with high-profile interviews, explainers, and unique stories from the ever-changing crypto industry. On today's show, Brian Brooks, CEO of BitFury and former acting comptroller of the currency under President Trump, discusses where Congress stands on regulation of crypto in the U.S. 00:00 - CNBC Crypto World, May 3, 2022 0:27 - Crypto's flat trading day 0:44 - The headlines 2:40 - Brian Brooks of BitFury » Subscribe to CNBC TV: https://cnb.cx/SubscribeCNBCtelevision » Subscribe to CNBC: https://cnb.cx/SubscribeCNBC Turn to CNBC TV for the latest stock market news and analysis.",
      source_name: "CNBC Television",
      date: "Tue, 03 May 2022 15:10:38 -0400",
      topics: ["regulations"],
      sentiment: "Positive",
      type: "Video",
      tickers: ["ETH"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=TBOvwor6zgs",
      image_url:
        "https://crypto.snapi.dev/images/v1/v/i/crypto-report-the-graph-is-the-google-of-blockchains-136338.jpg",
      title: "Crypto Report: The Graph Is the 'Google of Blockchains'",
      text: "The Graph Foundation Director Eva Beylin joins Emily Chang to discuss The Graph's role in the future of web3 and crypto adoption, and why more regulatory clarity is needed in the space.",
      source_name: "Bloomberg Technology",
      date: "Tue, 03 May 2022 19:31:45 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Video",
      tickers: ["GRT"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=TW5OaYU1eYQ",
      image_url:
        "https://crypto.snapi.dev/images/v1/7/l/bitcoin-why-the-upcoming-fed-decision-could-be-bad-news-136635.jpg",
      title: "Bitcoin: Why the upcoming Fed decision could be bad news",
      text: "#Bitcoin #Fed #Crypto #YahooFinance Yahoo Finance reporter David Hollerith explains how previous Fed rate hikes have impacted bitcoin and other crypto markets, along with how the interest in NFTs is waning over time. Don't Miss: Valley of Hype: The Culture That Built Elizabeth Holmes WATCH HERE: https://youtu.be/Sb179GLPNYE Watch the 2021 Berkshire Hathaway Annual Shareholders Meeting on YouTube: https://youtu.be/gx-OzwHpM9k Subscribe to Yahoo Finance: https://yhoo.it/2fGu5Bb About Yahoo Finance: At Yahoo Finance, you get free stock quotes, up-to-date news, portfolio management resources, international market data, social interaction and mortgage rates that help you manage your financial life.",
      source_name: "Yahoo Finance",
      date: "Wed, 04 May 2022 11:28:01 -0400",
      topics: [],
      sentiment: "Negative",
      type: "Video",
      tickers: ["BTC"],
    },
    {
      news_url: "https://www.youtube.com/watch?v=_ATAuHuPAuc",
      image_url:
        "https://crypto.snapi.dev/images/v1/v/m/fed-hikes-rates-elon-musk-trolls-nfts-and-microstrategy-doubles-down-on-bitcoin-cnbc-crypto-world-136755.jpg",
      title:
        "Fed hikes rates, Elon Musk trolls NFTs, and MicroStrategy doubles down on bitcoin: CNBC Crypto World",
      text: "CNBC Crypto World features the latest news and daily trading updates from the digital currency markets and provides viewers with a look at what's ahead with high-profile interviews, explainers, and unique stories from the ever-changing crypto industry. On today's show, Amanda Fabiano, head of mining at Galaxy Digital, discusses New York State's potential bitcoin mining moratorium and what it means for jobs in the state.",
      source_name: "CNBC Television",
      date: "Wed, 04 May 2022 15:23:32 -0400",
      topics: ["NFT"],
      sentiment: "Positive",
      type: "Video",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cointelegraph.com/news/bitcoin-pushes-to-40k-but-are-bulls-strong-enough-to-win-friday-s-735m-options-expiry",
      image_url:
        "https://crypto.snapi.dev/images/v1/0/a/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmduvm2u2mzjjzjutnmnlmi00otlilthjntetnjk3mzrmzwvmogm2lmpwzw-136758.jpg",
      title:
        "Bitcoin pushes to $40K, but are bulls strong enough to win Friday's $735M options expiry?",
      text: "$735 million in BTC options expire on May 6 and data suggests that the current macroeconomic conditions will continue to favor bears.",
      source_name: "Cointelegraph",
      date: "Wed, 04 May 2022 15:28:36 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/markets/california-governor-signs-executive-order-encouraging-bitcoin-and-crypto-businesses",
      image_url:
        "https://crypto.snapi.dev/images/v1/f/x/bitcoin-1-630x420-135913-136574-136756.jpg",
      title:
        "California Governor Signs Executive Order Encouraging Bitcoin And Crypto Businesses",
      text: "The governor of California signed an executive order to drive innovation for bitcoin and other cryptocurrency-based businesses with transparent regulation.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 15:26:39 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://dailyhodl.com/2022/05/04/historically-accurate-indicator-that-marks-bitcoin-bottoms-is-about-to-flash-crypto-analyst-benjamin-cowen/",
      image_url:
        "https://crypto.snapi.dev/images/v1/f/7/historically-accurate-bitcoin-markerjpgw1024-136764.jpg",
      title:
        "Historically Accurate Indicator That Marks Bitcoin Bottoms Is About to Flash: Crypto Analyst Benjamin Cowen",
      text: "Popular crypto analyst Benjamin Cowen says one simple indicator with a history of calling Bitcoin bottoms is close to doing so again. In a new strategy session, Cowen takes a look at the 20-week and 100-week simple moving average (SMA) combo on Bitcoin. With both SMAs close to converging, Cowen points out that they've only […] The post Historically Accurate Indicator That Marks Bitcoin Bottoms Is About to Flash: Crypto Analyst Benjamin Cowen appeared first on The Daily Hodl.",
      source_name: "The Daily Hodl",
      date: "Wed, 04 May 2022 15:55:58 -0400",
      topics: [],
      sentiment: "Negative",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptoslate.com/bitcoin-climbs-as-fed-confirms-inflation-is-much-too-high/",
      image_url:
        "https://crypto.snapi.dev/images/v1/w/g/bitcoin-3-136381-136763.png",
      title: "Bitcoin climbs as FED confirms inflation is much too high",
      text: "Bitcoin rose as much as 3% today as the chair of the Federal Reserve, Jerome Powell, directly addressed the American people, declaring that “inflation is much too high” and “we have the tools to bring inflation down.” Powell also gave the market some guidance as to what can be expected for the rest of the […] The post Bitcoin climbs as FED confirms inflation is much too high appeared first on CryptoSlate.",
      source_name: "CryptoSlate",
      date: "Wed, 04 May 2022 15:51:17 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptopotato.com/liechtensteins-largest-private-bank-enables-direct-investments-in-bitcoin/",
      image_url:
        "https://crypto.snapi.dev/images/v1/v/z/bitcoin-lgt-136771.jpg",
      title:
        "Liechtenstein's Largest Private Bank Enables Direct Investments in Bitcoin",
      text: "LGT Bank joined forces with SEBA Bank to offer direct investments in bitcoin and ether for its clients.",
      source_name: "CryptoPotato",
      date: "Wed, 04 May 2022 16:05:48 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://u.today/ripple-co-founder-praises-california-governors-executive-order-on-crypto",
      image_url: "https://crypto.snapi.dev/images/v1/o/m/6441-144-136770.png",
      title:
        "Ripple Co-Founder Praises California Governor's Executive Order on Crypto",
      text: "Ripple co-founder Chris Larsen has praised California's effort to update U.S. financial regulations",
      source_name: "UToday",
      date: "Wed, 04 May 2022 16:05:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["XRP"],
    },
    {
      news_url:
        "https://dailyhodl.com/2022/05/04/end-of-bear-market-approaching-for-chainlink-link-says-crypto-analyst-heres-his-reversal-scenario/",
      image_url:
        "https://crypto.snapi.dev/images/v1/u/p/end-of-chainlink-bearjpgw1024-136766.jpg",
      title:
        "End of Bear Market Approaching for Chainlink (LINK), Says Crypto Analyst – Here's His Reversal Scenario",
      text: "Popular crypto analyst Michaël van de Poppe thinks the end of the bear market is near for decentralized oracle network Chainlink (LINK) and other struggling altcoins. In a new video update, Van de Poppe tells his 165,000 YouTube subscribers that Chainlink is down about 80% from its all-time high of $52.70, which it hit last […] The post End of Bear Market Approaching for Chainlink (LINK), Says Crypto Analyst – Here's His Reversal Scenario appeared first on The Daily Hodl.",
      source_name: "The Daily Hodl",
      date: "Wed, 04 May 2022 16:00:55 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["LINK"],
    },
    {
      news_url:
        "https://ambcrypto.com/iota-miota-comes-to-panama-and-heres-how-the-metrics-reacted/",
      image_url:
        "https://crypto.snapi.dev/images/v1/9/2/kaja-reichardt-8omiql-q9nm-unsplash-2-136765.jpg",
      title: "IOTA [MIOTA] comes to Panama and here's how the metrics reacted",
      text: "Alts are not having an easy time of it recently, as market fear and macro events prompt traders to look at Bitcoin [BTC], Ethereum [ETH], and other big coins as they search out stability and security. However, that doesn't mean projects outside the top 10 list are losing out on the action.",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 16:00:09 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["MIOTA"],
    },
    {
      news_url:
        "https://cryptonews.com/news/el-salvador-finance-minister-were-waiting-for-bitcoin-price-rise-before-issuing-btc-bonds.htm",
      image_url:
        "https://crypto.snapi.dev/images/v1/q/6/adobestock-315091536-136767.jpg",
      title:
        "El Salvador Finance Minister: We're Waiting for Bitcoin Price Rise Before Issuing BTC Bonds",
      text: "The Salvadoran government is “waiting for a bitcoin (BTC) price rise” before releasing its long-awaited BTC bonds, the nation's finance minister has claimed.",
      source_name: "Cryptonews",
      date: "Wed, 04 May 2022 16:00:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.coindesk.com/business/2022/05/04/filecoin-foundation-and-muckrock-seek-to-integrate-decentralized-document-storage/",
      image_url:
        "https://crypto.snapi.dev/images/v1/8/o/k3thl5dm4ja7bgxkqokfdd6auq-136769.jpg",
      title:
        "Filecoin Foundation and MuckRock Seek to Integrate Decentralized Document Storage",
      text: "Verified users will be able to simultaneously publish vetted documents to both DocumentCloud and Filecoin/IPFS.",
      source_name: "Coindesk",
      date: "Wed, 04 May 2022 16:00:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["FIL"],
    },
    {
      news_url:
        "https://beincrypto.com/microstrategys-revenue-plummets-amid-bitcoins-weak-performance/",
      image_url:
        "https://crypto.snapi.dev/images/v1/l/t/microstrategy-136772.png",
      title: "MicroStrategy's Revenue Plummets Amid Bitcoin's Weak Performance",
      text: "MicroStrategy Inc., the largest public holder of Bitcoin, recorded a decline in revenue in Q1 2022 largely on the back of crypto market weakness.  The post MicroStrategy's Revenue Plummets Amid Bitcoin's Weak Performance appeared first on BeInCrypto.",
      source_name: "BeInCrypto",
      date: "Wed, 04 May 2022 16:00:00 -0400",
      topics: [],
      sentiment: "Negative",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://decrypt.co/99463/bitcoin-miner-argo-borrows-another-70m-from-nydig",
      image_url:
        "https://crypto.snapi.dev/images/v1/x/a/crypto-mining-gid-4-136768.jpg",
      title: "Bitcoin Miner Argo Borrows Another $70M for Rigs From NYDIG",
      text: "The company has now secured a total of $97.2 million in loans from NYDIG.",
      source_name: "Decrypt",
      date: "Wed, 04 May 2022 15:59:58 -0400",
      topics: ["mining"],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://investorplace.com/2022/05/deso-crypto-decentralized-social-gains-amid-elon-musks-twitter-purchase/",
      image_url: "https://crypto.snapi.dev/images/v1/9/s/crypto8-136774.jpg",
      title:
        "DESO Crypto: Decentralized Social Gains Amid Elon Musk's Twitter Purchase",
      text: "The DESO crypto is one of today's biggest gainers as investors show interest in taking social media to the blockchain.",
      source_name: "Investorplace",
      date: "Wed, 04 May 2022 16:16:19 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["DESO"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/markets/federal-reserve-raises-rates-biggest-hike-in-20-years",
      image_url:
        "https://crypto.snapi.dev/images/v1/t/g/marriner-s-eccles-federal-reserve-board-building-136775.jpg",
      title:
        "Bitcoin Touches $40,000 As Fed Raises Rates In Biggest Hike In 20 Years",
      text: "The Federal Reserve raised rates by 50 basis points on Wednesday in its latest attempt to curb inflation in the U.S.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 16:27:15 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptoslate.com/microstrategy-could-defend-21k-btc-to-stop-a-margin-call/",
      image_url:
        "https://crypto.snapi.dev/images/v1/s/x/microstrategy-bitcoin-136776.jpg",
      title: "Microstrategy could defend $21k BTC to stop a margin call",
      text: "The Microstrategy Q1 earnings call has revealed that they have a vested interest in keeping Bitcoin above $21,000 should there be a market capitulation. The post Microstrategy could defend $21k BTC to stop a margin call appeared first on CryptoSlate.",
      source_name: "CryptoSlate",
      date: "Wed, 04 May 2022 16:31:17 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://ambcrypto.com/zilliqa-zil-investors-must-watch-out-for-these-key-levels/",
      image_url:
        "https://crypto.snapi.dev/images/v1/s/z/capturetttttt-e1651678161559-136777.jpg",
      title: "Zilliqa [ZIL] investors must watch out for these key levels",
      text: "The last two weeks have seen Zilliqa (ZIL) continue its plummet below some key price levels dropping below its 200 EMA (green). The market structure finally saw some clash between buyers and sellers on the $0.06 floor.",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 16:30:41 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["ZIL"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/markets/federal-reserve-raises-rates-biggest-hike-in-20-years",
      image_url:
        "https://crypto.snapi.dev/images/v1/t/g/marriner-s-eccles-federal-reserve-board-building-136775.jpg",
      title:
        "Bitcoin Touches $40,000 As Fed Raises Rates In Biggest Hike In 20 Years",
      text: "The Federal Reserve raised rates by 50 basis points on Wednesday in its latest attempt to curb inflation in the U.S.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 16:27:15 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://decrypt.co/99472/bitcoin-ethereum-follow-stock-market-upward-after-fed-interest-rate-increase",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/s/shutterstock-763382239-gid-5-136778.jpg",
      title:
        "Bitcoin and Ethereum Follow Stock Market Upward After Fed Interest Rate Increase",
      text: "The cryptocurrency market cap gained 6% in 24 hours.",
      source_name: "Decrypt",
      date: "Wed, 04 May 2022 16:40:10 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC", "ETH"],
    },
    {
      news_url:
        "https://dailyhodl.com/2022/05/04/stratis-to-fund-blockchain-innovation-center-in-uganda/",
      image_url:
        "https://crypto.snapi.dev/images/v1/7/h/crypto-winter-unlikelyjpgw1024-136519-136780.jpg",
      title: "Stratis To Fund Blockchain Innovation Center in Uganda",
      text: "May 4, 2022 – London, United Kingdom Partnership with King Oyo Foundation to develop use cases built on Stratis blockchain technologies. Investment marks the beginning of Stratis Africa. Stratis has entered a long-term partnership with the charitable Foundation of King Oyo, the current monarch of the Tooro Kingdom located in the South West of Uganda, with […] The post Stratis To Fund Blockchain Innovation Center in Uganda appeared first on The Daily Hodl.",
      source_name: "The Daily Hodl",
      date: "Wed, 04 May 2022 16:55:24 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["STRAX"],
    },
    {
      news_url:
        "https://www.theblockcrypto.com/linked/145165/imf-says-cars-adoption-of-bitcoin-as-legal-tender-raises-legal-and-economic-concerns",
      image_url:
        "https://crypto.snapi.dev/images/v1/h/1/shutterstock-1276403380-635x450-136783.jpg",
      title:
        "IMF says CAR's adoption of bitcoin as legal tender raises legal and economic concerns",
      text: "The IMF is assisting the CAR in addressing concerns posed by its recent move to adopt Bitcoin as legal tender.  The post IMF says CAR's adoption of bitcoin as legal tender raises legal and economic concerns appeared first on The Block.",
      source_name: "The Block",
      date: "Wed, 04 May 2022 17:04:16 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/technical/exploring-bip119-and-changes-made-to-bitcoin",
      image_url:
        "https://crypto.snapi.dev/images/v1/w/4/bitcoin-and-modern-soft-fork-activation-136781.png",
      title: "Exploring BIP119 And The Way Changes Are Made In Bitcoin",
      text: "In Bitcoin, it is nearly impossible to find out how much support there is for a proposal without trying it. CTV is a non-invasive change and should be accepted.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 17:00:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url: "https://crypto.news/polkadot-finally-cross-interoperability/",
      image_url: "https://crypto.snapi.dev/images/v1/f/z/polkadot-136782.jpg",
      title:
        "Polkadot Finally Launches Cross-Consensus Messaging for Full-Interoperability",
      text: "Polkadot has launched its messaging system, which will leverage a Cross-Consensus Messaging format (XCM). With this system, all Polkadot-based blockchains can directly communicate, making it the first time to do so, including the transfer of NFTs freely.",
      source_name: "Crypto news",
      date: "Wed, 04 May 2022 17:00:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["DOT"],
    },
    {
      news_url:
        "https://beincrypto.com/fantoms-ftm-rsi-drops-to-lowest-level-since-march-2020/",
      image_url:
        "https://crypto.snapi.dev/images/v1/t/e/fantomjpgoptimal-136784.jpg",
      title: "Fantom's (FTM) RSI Drops to Lowest Level Since March 2020",
      text: "Fantom (FTM) has broken down from a support area that had been in place since Sept. 2021. It has yet to show any signs that it might have reached a bottom.",
      source_name: "BeInCrypto",
      date: "Wed, 04 May 2022 17:00:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["FTM"],
    },
    {
      news_url:
        "https://www.theblockcrypto.com/linked/145140/mining-firm-marathon-reports-net-loss-of-13-million-and-a-big-boost-in-bitcoin-production-for-q1-2022",
      image_url:
        "https://crypto.snapi.dev/images/v1/a/e/20201117-mining-daily-800x450-136785.jpg",
      title:
        "Mining firm Marathon reports net loss of $13 million and a big boost in bitcoin production for Q1 2022",
      text: "According to its Q1 2022 results, the publicly traded bitcoin mining firm Marathon saw a net income loss of $13 million, despite higher earnings. The post Mining firm Marathon reports net loss of $13 million and a big boost in bitcoin production for Q1 2022 appeared first on The Block.",
      source_name: "The Block",
      date: "Wed, 04 May 2022 17:23:55 -0400",
      topics: ["mining"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://ambcrypto.com/matics-anticipated-upswing-could-face-a-premature-stop-at/",
      image_url:
        "https://crypto.snapi.dev/images/v1/q/o/roberto-h-qtovxsyxpyu-unsplash-e1651680114585-136787.jpg",
      title: "MATIC's anticipated upswing could face a premature stop at…",
      text: "MATIC price prepares for a quick run-up as it arrives at a significant support level. A resurgence of bulls will add credence and a tailwind to this outlook and propel Polygon higher.",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 17:30:21 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["MATIC"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/culture/bitcoin-and-nuclear-can-save-the-world",
      image_url:
        "https://crypto.snapi.dev/images/v1/f/z/20220428-btcfinal-bitcoin-and-nuclear-the-worlds-most-feared-technologies-can-actually-save-it-john-thompson-136786.png",
      title:
        "Bitcoin And Nuclear: The World's Most Feared Technologies Can Actually Save It",
      text: "Humanity must produce an excess amount of energy in order for forward progress — but with increasing demand, how can we achieve this?",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 17:30:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cointelegraph.com/news/3-key-metrics-signal-terra-luna-price-is-preparing-for-a-recovery",
      image_url:
        "https://crypto.snapi.dev/images/v1/3/9/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmduvodi2oteymjktn2u3oc00ntrilwexzdatnzhiyjg5yzg0zdc5lmpwzw-136788.jpg",
      title:
        "3 key metrics signal Terra (LUNA) price is preparing for a recovery",
      text: "LUNA price is far from its all-time high but three key metrics signal that the altcoin could be preparing to rally.",
      source_name: "Cointelegraph",
      date: "Wed, 04 May 2022 17:29:20 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["LUNA"],
    },
    {
      news_url:
        "https://dailyhodl.com/2022/05/04/heres-why-bitcoin-btc-is-the-fastest-horse-in-the-race-according-to-macro-analyst-lyn-alden/",
      image_url:
        "https://crypto.snapi.dev/images/v1/q/p/btc-fastest-horsejpgw1024-136797.jpg",
      title:
        "Here's Why Bitcoin (BTC) Is the Fastest Horse in the Race, According to Macro Analyst Lyn Alden",
      text: "Macro strategist Lyn Alden says Bitcoin (BTC) will surpass all other digital currencies to become the dominant form of money. In a new interview with the What Bitcoin Did podcast, Alden says the race for dominance is between BTC and central bank digital currencies (CBDCs). “I think the digitization of money is inevitable, and then […] The post Here's Why Bitcoin (BTC) Is the Fastest Horse in the Race, According to Macro Analyst Lyn Alden appeared first on The Daily Hodl.",
      source_name: "The Daily Hodl",
      date: "Wed, 04 May 2022 18:05:34 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://dailyhodl.com/2022/05/04/algorand-algo-founder-makes-10-year-prediction-on-crypto-markets-report/",
      image_url:
        "https://crypto.snapi.dev/images/v1/w/p/10-year-crypto-marketsjpgw1024-136795.jpg",
      title:
        "Algorand (ALGO) Founder Makes 10-Year Prediction On Crypto Markets: Report",
      text: "The founder of Ethereum challenger Algorand (ALGO) says that crypto assets with one key feature will survive into the next decade as blockchains become mainstream tools used by traditional financial institutions. In a new interview with the Los Angeles Times, Silvio Micali, a professor of computer science and cryptography at the Massachusetts Institute of Technology […] The post Algorand (ALGO) Founder Makes 10-Year Prediction On Crypto Markets: Report appeared first on The Daily Hodl.",
      source_name: "The Daily Hodl",
      date: "Wed, 04 May 2022 18:01:37 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["ALGO"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/culture/why-bitcoin-works-for-latin-america",
      image_url: "https://crypto.snapi.dev/images/v1/x/c/volcano-136794.png",
      title: "Why Bitcoin Works For Latin America",
      text: "The trustless nature of Bitcoin allows tremendous societal growth and development in places with low trust in the government and institutions.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 18:00:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.cryptoglobe.com/latest/2022/05/you-can-now-buy-a-yacht-with-shiba-inu-shib-and-other-cryptos/",
      image_url:
        "https://crypto.snapi.dev/images/v1/u/s/marcin-ciszewski-zexjl0v3mru-unsplash-136796.jpg",
      title: "You Can Now Buy a Yacht With Shiba Inu ($SHIB) and Other Cryptos",
      text: "Camper & Nicholsons International, one of the oldest yachting companies in the world founded in 1782, has started accepting cryptocurrency payments via the popular processor BitPay, which supports the meme-inspired cryptocurrency Shiba Inu ($SHIB). According to a press release Camper & Nicholsons is accepting cryptocurrency payments in a bid to attract new customers and sales […]",
      source_name: "CryptoGlobe",
      date: "Wed, 04 May 2022 17:55:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["SHIB"],
    },
    {
      news_url:
        "https://www.theblockcrypto.com/post/145188/select-gucci-stores-to-accept-bitcoin-dogecoin-and-more-as-part-of-ongoing-experiments-in-web3",
      image_url:
        "https://crypto.snapi.dev/images/v1/6/p/20220307-crypto-fashion-jewelry-800x450-136802.jpg",
      title:
        "Select Gucci stores to accept bitcoin, dogecoin and more as part of ongoing experiments in web3",
      text: "Luxury brand Gucci will begin accepting crypto payments in select stores across the US later this month. The post Select Gucci stores to accept bitcoin, dogecoin and more as part of ongoing experiments in web3 appeared first on The Block.",
      source_name: "The Block",
      date: "Wed, 04 May 2022 18:19:06 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC", "DOGE"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/culture/african-free-trade-can-succeed-with-bitcoin",
      image_url: "https://crypto.snapi.dev/images/v1/d/i/img-6237-136809.png",
      title:
        "The African Continental Free Trade Agreement Can Succeed With Bitcoin",
      text: "The AfCFTA is an intra-African trade agreement that offers opportunities to bring prosperity to Africa with the potential adoption of bitcoin.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 18:30:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://insidebitcoins.com/news/bitcoin-price-prediction-for-today-may-4-btc-stabilizes-above-39000-level",
      image_url: "https://crypto.snapi.dev/images/v1/x/o/crypto12-136808.jpg",
      title:
        "Bitcoin Price Prediction for Today, May 4: BTC Stabilizes Above $39,000 Level",
      text: "The Bitcoin price prediction shows that BTC is trading at $39,723 as the coin seems to be preparing for another upward movement. BTC/USD Long-term Trend: [.",
      source_name: "Inside Bitcoins",
      date: "Wed, 04 May 2022 18:29:11 -0400",
      topics: ["tanalysis"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://decrypt.co/99480/texas-crowdfunding-platform-offers-investors-fractional-ownership-bitcoin-mines",
      image_url:
        "https://crypto.snapi.dev/images/v1/7/g/bitcoin-mining-rig-gid-6-136805.jpg",
      title:
        "Texas Crowdfunding Platform Offers Investors Fractional Ownership in Bitcoin Mines",
      text: "EnergyFunders will issue monthly payouts in Bitcoin or U.S. dollars, saying returns could top 100% if the Bitcoin price stays in the $45,000 range.",
      source_name: "Decrypt",
      date: "Wed, 04 May 2022 18:19:30 -0400",
      topics: ["mining"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://ambcrypto.com/will-solana-sol-be-able-to-repair-investors-confidence-in-may/",
      image_url:
        "https://crypto.snapi.dev/images/v1/j/j/pp-2-sol-cover-e1651634013815-136810.jpg",
      title: "Will Solana [SOL] be able to repair investors' confidence in May",
      text: "Disclaimer: The findings of the following analysis are the sole opinions of the writer and should not be considered investment advice. Solana investors had reason to worry based on the token's performance on the charts.",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 18:30:41 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["SOL"],
    },
    {
      news_url:
        "https://www.forbes.com/sites/michaeldelcastillo/2022/05/04/bitcoin-trailblazer-raises-capital-to-create-interplanetary-cryptocurrency/",
      image_url:
        "https://crypto.snapi.dev/images/v1/9/b/bitcoin-trailblazer-raises-capital-to-create-interplanetary-cryptocurrency-136811.jpg",
      title:
        "Bitcoin Trailblazer Raises Capital To Create Interplanetary Cryptocurrency",
      text: "LedgerX founding CEO Paul Chou is building on the sale of the company he created to FTX by creating a new kind of cryptocurrency, Foundation Coin, that can be spent on Earth, the Moon, Mars and beyond.",
      source_name: "Forbes",
      date: "Wed, 04 May 2022 18:44:12 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://ambcrypto.com/will-solana-sol-be-able-to-repair-investors-confidence-in-may/",
      image_url:
        "https://crypto.snapi.dev/images/v1/j/j/pp-2-sol-cover-e1651634013815-136810.jpg",
      title: "Will Solana [SOL] be able to repair investors' confidence in May",
      text: "Disclaimer: The findings of the following analysis are the sole opinions of the writer and should not be considered investment advice. Solana investors had reason to worry based on the token's performance on the charts.",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 18:30:41 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["SOL"],
    },
    {
      news_url:
        "https://www.newsbtc.com/news/bitcoin/bitcoin-institutional-outflows-near-one-year-highs-more-downside-coming/",
      image_url: "https://crypto.snapi.dev/images/v1/s/j/bitcoin-1-136814.jpeg",
      title:
        "Bitcoin Institutional Outflows Near One-Year Highs, More Downside Coming?",
      text: "With the price of bitcoin still trading below $40,000, institutional inflows into the digital asset have slowed significantly. This has now flowed into other digital assets in the space.",
      source_name: "NewsBTC",
      date: "Wed, 04 May 2022 19:00:12 -0400",
      topics: ["institutions"],
      sentiment: "Negative",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://insidebitcoins.com/news/ripple-price-prediction-for-today-may-4-xrp-may-spike-above-0-80-level",
      image_url: "https://crypto.snapi.dev/images/v1/3/o/crypto14-136813.jpg",
      title:
        "Ripple Price Prediction for Today, May 4: XRP May Spike Above $0.80 Level",
      text: "The Ripple price prediction shows that XRP is ready to renew the bullish trend after crossing above the 9-day moving average. XRP/USD Market Key Levels: [.",
      source_name: "Inside Bitcoins",
      date: "Wed, 04 May 2022 18:57:22 -0400",
      topics: ["tanalysis"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["XRP"],
    },
    {
      news_url:
        "https://coinmarketcap.com/alexandria/article/bitcoin-up-5-after-fed-raises-interest-rates-by-half-a-percentage-point-but-why",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/v/f3f7840abf32438aa85b8d27bf6679a3-136816.jpg",
      title:
        "Bitcoin Up 5% After Fed Raises Interest Rates By Half a Percentage Point... But Why?",
      text: "Bitcoin's rise on Wednesday can likely be attributed to strength on Wall Street. The tech-heavy Nasdaq closed trading up 3.2%, with the S&P 500 showing comparable gains.",
      source_name: "CoinMarketCap",
      date: "Wed, 04 May 2022 19:07:20 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://bitcoinist.com/ethereum-whales-may-be-bearish-towards-shiba-inu/",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/t/shiba-inu-640x361-136815.jpg",
      title:
        "Ethereum Whales May Be Bearish Towards Shiba Inu As Balance Drops Below $1 Billion",
      text: "  Ethereum whales are no doubt some of the biggest fans of meme coin Shiba Inu but it seems even the whales are starting to feel the heat of the downtrend. This has resulted in the top whales significantly decreasing their holding in the digital asset.",
      source_name: "Bitcoinist",
      date: "Wed, 04 May 2022 19:00:16 -0400",
      topics: ["whales"],
      sentiment: "Negative",
      type: "Article",
      tickers: ["ETH", "SHIB"],
    },
    {
      news_url:
        "https://thecurrencyanalytics.com/bitcoin/bitcoin-btc-adoption-with-price-engineered-to-increase-forever-41215.php",
      image_url:
        "https://crypto.snapi.dev/images/v1/i/u/bitcoin-btc-adoption-with-price-engineered-to-increase-forever-136817.jpg",
      title: "Bitcoin (BTC) Adoption with Price Engineered to Increase Forever",
      text: "Catch up on the latest crypto market news at The Currency Analytics. It took 12 years for the first nation to adopt Bitcoin and it took 9 months for the second.",
      source_name: "The Currency Analytics",
      date: "Wed, 04 May 2022 19:15:57 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.coindesk.com/business/2022/05/04/marathon-digital-may-start-to-sell-some-of-its-bitcoins/",
      image_url:
        "https://crypto.snapi.dev/images/v1/v/o/ifw6fyzhjnd3fabgqxgodfccqm-136818.jpg",
      title: "Marathon Digital May Start to Sell Some of Its Bitcoins",
      text: "The miner said any sale would not be imminent, but that it might need about a half-billion dollars in investments to reach its growth objectives this year.",
      source_name: "Coindesk",
      date: "Wed, 04 May 2022 19:11:00 -0400",
      topics: ["bitcoin"],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://coinmarketcap.com/alexandria/article/bitcoin-up-5-after-fed-raises-interest-rates-by-half-a-percentage-point-but-why",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/v/f3f7840abf32438aa85b8d27bf6679a3-136816.jpg",
      title:
        "Bitcoin Up 5% After Fed Raises Interest Rates By Half a Percentage Point... But Why?",
      text: "Bitcoin's rise on Wednesday can likely be attributed to strength on Wall Street. The tech-heavy Nasdaq closed trading up 3.2%, with the S&P 500 showing comparable gains.",
      source_name: "CoinMarketCap",
      date: "Wed, 04 May 2022 19:07:20 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://bitcoinist.com/ethereum-whales-may-be-bearish-towards-shiba-inu/",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/t/shiba-inu-640x361-136815.jpg",
      title:
        "Ethereum Whales May Be Bearish Towards Shiba Inu As Balance Drops Below $1 Billion",
      text: "  Ethereum whales are no doubt some of the biggest fans of meme coin Shiba Inu but it seems even the whales are starting to feel the heat of the downtrend. This has resulted in the top whales significantly decreasing their holding in the digital asset.",
      source_name: "Bitcoinist",
      date: "Wed, 04 May 2022 19:00:16 -0400",
      topics: ["whales"],
      sentiment: "Negative",
      type: "Article",
      tickers: ["SHIB"],
    },
    {
      news_url:
        "https://ambcrypto.com/what-are-the-chances-of-bitcoin-btc-retesting-42k-in-near-term/",
      image_url:
        "https://crypto.snapi.dev/images/v1/p/o/bermix-studio-ax1hn4und-i-unsplash-e1651680929223-136822.jpg",
      title:
        "What are the chances of Bitcoin [BTC] retesting $42k in near-term",
      text: "Bitcoin's price has been on a downtrend for more than a month. However, the price action since 18 April seems to have formed a bullish pattern, suggesting that an uptrend is on the horizon for BTC.",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 19:30:21 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptopotato.com/bitcoin-miner-argo-blockchain-borrows-70m-to-buy-equipment-for-texas-site/",
      image_url:
        "https://crypto.snapi.dev/images/v1/p/r/argo-blockchain-136824.png",
      title:
        "Bitcoin Miner Argo Blockchain Borrows $70M to Buy Equipment for Texas Site",
      text: "Bitcoin miner Argo Blockchain has announced taking on additional debt from the NYDIG subsidiary.",
      source_name: "CryptoPotato",
      date: "Wed, 04 May 2022 19:45:47 -0400",
      topics: ["mining"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.newsbtc.com/news/bitcoin/bitcoin-could-see-10-jump-as-volatility-drops-to-18-month-low/",
      image_url:
        "https://crypto.snapi.dev/images/v1/i/q/16464078230388-136826.jpg",
      title: "Bitcoin Could See 10% Jump, As Volatility Drops To 18-Month Low",
      text: "After its third-largest weekly fall in over a year, the Bitcoin (BTC) price has finally began to rise. BTC's price has effectively rebounded from the important support level of $37,500, despite an impending Federal Reserve rate hike.",
      source_name: "NewsBTC",
      date: "Wed, 04 May 2022 20:10:24 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://ambcrypto.com/heres-whats-next-for-enjin-coin-enj-after-dropping-to-1/",
      image_url:
        "https://crypto.snapi.dev/images/v1/j/8/untitled-design-14-136829.png",
      title: "Here's what's next for Enjin Coin [ENJ] after dropping to $1",
      text: "Bruised throughout April, Enjin Coin (ENJ) finally halted the streak of red candles while finding testing grounds at the $1.054-mark. The down-channel dive led the altcoin below critical points but obliged its immediate trendline resistance (yellow).",
      source_name: "AMBCrypto",
      date: "Wed, 04 May 2022 20:30:55 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["ENJ"],
    },
    {
      news_url:
        "https://www.cryptoglobe.com/latest/2022/05/shib-army-more-bullish-on-shiba-inu-burn-portal-than-metaverse-poll-shows/",
      image_url:
        "https://crypto.snapi.dev/images/v1/h/4/shiba-6763358-1280-136827.jpg",
      title:
        "$SHIB Army More Bullish on Shiba Inu Burn Portal than Metaverse, Poll Shows",
      text: "The Shiba Inu ($SHIB) community seemingly supports token burns over its Metaverse as part of the project's long-term strategy, presumably believing a reduction in the currency's circulating supply is more beneficial than its Metaverse. According to polls conducted by Shiba Inu team member Archangel, first spotted by Gfinity Esports, SHIB community members believe that the […]",
      source_name: "CryptoGlobe",
      date: "Wed, 04 May 2022 20:20:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["SHIB"],
    },
    {
      news_url:
        "https://www.newsbtc.com/news/dogecoin-price-could-plunge-to-0-11-owing-to-a-consistent-downslide/",
      image_url:
        "https://crypto.snapi.dev/images/v1/g/h/kanchanara-urketzrn-k4-unsplash-136832.jpg",
      title:
        "Dogecoin Price Could Plunge To $0.11 Owing To A Consistent Downslide",
      text: "Dogecoin, the largest meme-coin by market capitalisation has bled for close to a week now. Prices of the coin have looked bearish in the last 24 hours and continued to look negative at press time.",
      source_name: "NewsBTC",
      date: "Wed, 04 May 2022 21:00:40 -0400",
      topics: [],
      sentiment: "Negative",
      type: "Article",
      tickers: ["DOGE"],
    },
    {
      news_url:
        "https://www.newsbtc.com/news/amidst-a-new-development-algorand-could-be-eyeing-1/",
      image_url:
        "https://crypto.snapi.dev/images/v1/q/t/shubham-dhage-uxdu0gg5pqq-unsplash-136831.jpg",
      title: "Amidst A New Development Algorand Could Be Eyeing $1",
      text: "Algorand is currently bullish on its chart at the time of writing. Fifa's governing body announced Algorand to be the official blockchain partner of the World Cup competition.",
      source_name: "NewsBTC",
      date: "Wed, 04 May 2022 21:00:18 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["ALGO"],
    },
    {
      news_url:
        "https://decrypt.co/99504/gucci-begin-accepting-bitcoin-some-stores",
      image_url:
        "https://crypto.snapi.dev/images/v1/m/d/gucci-store-gid-2-136833.jpeg",
      title: "Gucci to Begin Accepting Bitcoin in Some Stores",
      text: "Gucci is the latest luxury brand to begin accepting crypto payments.",
      source_name: "Decrypt",
      date: "Wed, 04 May 2022 20:59:45 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.pymnts.com/cryptocurrency/2022/ethereums-creator-says-a-nickels-too-much-to-pay-for-crypto-transactions/",
      image_url:
        "https://crypto.snapi.dev/images/v1/e/t/ethereum-457x274-136830.jpg",
      title:
        "Ethereum's Creator Says a Nickel's Too Much to Pay for Crypto Transactions",
      text: "How much is too much to pay for a crypto transaction? Five cents, according to the creator of Ethereum, the blockchain on which most cryptocurrency-based projects are built.",
      source_name: "PYMNTS",
      date: "Wed, 04 May 2022 20:35:36 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["ETH"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/culture/professional-wrestler-is-bullish-on-bitcoin",
      image_url: "https://crypto.snapi.dev/images/v1/0/o/img-6489-136837.png",
      title: "Professional Wrestler Summer Rae Is Bullish On Bitcoin",
      text: "Wrestler Summer Rae, joins the “Bitcoin Bottom Line” podcast to discuss taking a percentage of her salary in bitcoin and mining energy efficiency.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 21:30:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://news.bitcoin.com/joe-rogan-bitcoin-is-now-a-viable-currency-government-is-freaking-out/",
      image_url: "https://crypto.snapi.dev/images/v1/p/4/joe-rogan2-136838.jpg",
      title:
        "Joe Rogan: Bitcoin Is Now a Viable Currency and the Government Is Freaking Out",
      text: "Joe Rogan, the host of The Joe Rogan Experience, likens bitcoin to the early internet. Noting that now the cryptocurrency is “a viable form of currency” that “You can actually buy things with,” he said, “the government is freaking out.” Joe Rogan, Bitcoin, and the Government Famous podcaster Joe Rogan, the host of The Joe […]",
      source_name: "Bitcoin",
      date: "Wed, 04 May 2022 21:30:11 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptopotato.com/dubai-regulator-will-open-offices-in-the-sandbox-metaverse/",
      image_url:
        "https://crypto.snapi.dev/images/v1/t/h/img1-metaverse-136839.jpg",
      title: "Dubai Regulator Will Open Offices in The Sandbox Metaverse",
      text: "One of Dubai's regulators has just purchased its first piece of land in The Sandbox metaverse with the aim to open virtual offices.",
      source_name: "CryptoPotato",
      date: "Wed, 04 May 2022 21:48:55 -0400",
      topics: ["regulations"],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["SAND"],
    },
    {
      news_url:
        "https://news.bitcoin.com/joe-rogan-bitcoin-is-now-a-viable-currency-government-is-freaking-out/",
      image_url: "https://crypto.snapi.dev/images/v1/p/4/joe-rogan2-136838.jpg",
      title:
        "Joe Rogan: Bitcoin Is Now a Viable Currency and the Government Is Freaking Out",
      text: "Joe Rogan, the host of The Joe Rogan Experience, likens bitcoin to the early internet. Noting that now the cryptocurrency is “a viable form of currency” that “You can actually buy things with,” he said, “the government is freaking out.” Joe Rogan, Bitcoin, and the Government Famous podcaster Joe Rogan, the host of The Joe […]",
      source_name: "Bitcoin",
      date: "Wed, 04 May 2022 21:30:11 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://bitcoinmagazine.com/culture/bitcoin-will-use-any-type-of-energy-it-wants",
      image_url: "https://crypto.snapi.dev/images/v1/r/u/img-4431-136840.png",
      title: "Bitcoin Will Use Energy And It Doesn't Need To Be Renewables",
      text: "Energy usage is not something from which we should shy away. Bitcoin miners are already doing the hard work that is making the world a better place.",
      source_name: "Bitcoin Magazine",
      date: "Wed, 04 May 2022 22:00:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptopotato.com/dubai-regulator-will-open-offices-in-the-sandbox-metaverse/",
      image_url:
        "https://crypto.snapi.dev/images/v1/t/h/img1-metaverse-136839.jpg",
      title: "Dubai Regulator Will Open Offices in The Sandbox Metaverse",
      text: "One of Dubai's regulators has just purchased its first piece of land in The Sandbox metaverse with the aim to open virtual offices.",
      source_name: "CryptoPotato",
      date: "Wed, 04 May 2022 21:48:55 -0400",
      topics: ["regulations"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["SAND"],
    },
    {
      news_url:
        "https://coinpedia.org/altcoin/what-role-does-terra-luna-have-in-bitcoin-market-capitulation/",
      image_url: "https://crypto.snapi.dev/images/v1/b/w/crypto15-136842.jpg",
      title:
        "What Role Does Terra (LUNA) Have In Bitcoin & Market Capitulation?",
      text: "A well-known Crypto analyst and strategist, Lyn Alde, is of the opinion that the recent Bitcoin purchase by Terra (LUNA) could be the reason for Bitcoin's upcoming bull run along with other cryptocurrencies. In the last few months, the non-profitable organization called Luna Foundation Guard (LFG) which is built to support Terra is seen accumulating …",
      source_name: "CoinPedia",
      date: "Wed, 04 May 2022 22:09:22 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC", "LUNA"],
    },
    {
      news_url:
        "https://coinpedia.org/bitcoin/bitcoin-bear-market-to-continue-in-q2-and-q3-btc-price-might-revisit-this-lower-level/",
      image_url: "https://crypto.snapi.dev/images/v1/c/c/crypto17-136844.jpg",
      title:
        "Bitcoin Bear Market To Continue In Q2 and Q3. BTC Price Might Revisit This Lower Level",
      text: "After achieving an all-time high (ATH) of $69K last year, bitcoin and the rest of the cryptocurrency market have been gloomy for the following six months. While the prices are depressing for many, it has led to speculation about how long the downward trend will continue. The leading crypto asset has lost 45 percent since …",
      source_name: "CoinPedia",
      date: "Wed, 04 May 2022 22:20:27 -0400",
      topics: [],
      sentiment: "Negative",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://coinpedia.org/ethereum/ethereum-fake-breakout-on-horizon-eth-price-may-reclaim-3k-level-before-moving-lower/",
      image_url: "https://crypto.snapi.dev/images/v1/s/v/crypto16-136843.jpg",
      title:
        "Ethereum Fake Breakout On Horizon : (ETH) Price May Reclaim $3K Level Before Moving Lower",
      text: "Currently, Ethereum is in a recovery phase after having some difficult weeks. Since this weekend the second largest currency is trading with lower higher highs and higher lows. At the time of writing, Ethereum is trading at $2,858 with a surge by 1.84% over the last 24hrs. Ethereum To See A Mini Breakout From March …",
      source_name: "CoinPedia",
      date: "Wed, 04 May 2022 22:13:57 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["ETH"],
    },
    {
      news_url:
        "https://www.cryptoglobe.com/latest/2022/05/retail-interest-in-cardano-ada-is-rapidly-rising-data-shows/",
      image_url:
        "https://crypto.snapi.dev/images/v1/2/7/sajad-nori-xihagoynhn4-unsplash-136846.jpg",
      title:
        "Retail Interest in Cardano ($ADA) Is ‘Rapidly Rising', Data Shows",
      text: "Retail interest in Cardano ($ADA) is “rapidly increasing” as in the last 30 days addresses holding for less than 30 days – defined as traders on the blockchain – have increased their holdings by 186%. According to data from analytics firm IntoTheBlock, these trader addresses now collectively hold 36.14% of the cryptocurrency's supply after heavily […]",
      source_name: "CryptoGlobe",
      date: "Wed, 04 May 2022 22:50:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["ADA"],
    },
    {
      news_url:
        "https://www.newsbtc.com/analysis/btc/bitcoin-price-breakout-40k/",
      image_url:
        "https://crypto.snapi.dev/images/v1/m/q/shutterstock-1182580207-136848.jpg",
      title: "TA: Bitcoin Price Breakout Suggests A Short-term Trend Change",
      text: "Bitcoin gained pace above the $39,000 resistance against the US Dollar. BTC even tested $40,000 and might continue to rise in the near term.",
      source_name: "NewsBTC",
      date: "Wed, 04 May 2022 23:08:15 -0400",
      topics: ["tanalysis"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url: "https://coingape.com/?p=111463",
      image_url: "https://crypto.snapi.dev/images/v1/n/1/apecoin-136847.jpg",
      title:
        "APE Price Prediction: APE Price Eyes 10% Hike with $17.6 Breakout",
      text: "On May 4th, the Apecoin(APE) price rebounded from the 0.786 Fibonacci retracement level($14) with a long bullish engulfing candle of 10% intraday gain. Furthermore, this sudden gain was bounded by the event that the Billionaire Elon musk had his Twitter profile picture changed to a collage of several Bored Ape NFTs.",
      source_name: "Coingape",
      date: "Wed, 04 May 2022 23:02:36 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["APE"],
    },
    {
      news_url:
        "https://cointelegraph.com/news/shiba-inu-has-a-new-use-case-buying-land-in-shib-the-metaverse",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/j/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmduvzdkwmza3mtytngnlos00yzi1lthiotutntjhotc3ndq3mwqwlkpqrw-136851.jpg",
      title:
        "Shiba Inu has a new use case — Buying land in SHIB: The Metaverse",
      text: "Memecoin Shiba Inu can officially be used to purchase land in the SHIB Metaverse using the native SHIB token, as the development team continues to provide utility for holders.",
      source_name: "Cointelegraph",
      date: "Wed, 04 May 2022 23:11:41 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["SHIB"],
    },
    {
      news_url:
        "https://www.newsbtc.com/analysis/btc/bitcoin-price-breakout-40k/",
      image_url:
        "https://crypto.snapi.dev/images/v1/i/n/bitcoin-2-480x320-136393-136848.jpg",
      title: "TA: Bitcoin Price Breakout Suggests A Short-term Trend Change",
      text: "Bitcoin gained pace above the $39,000 resistance against the US Dollar. BTC even tested $40,000 and might continue to rise in the near term.",
      source_name: "NewsBTC",
      date: "Wed, 04 May 2022 23:08:15 -0400",
      topics: ["tanalysis"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cointelegraph.com/news/new-crypto-litigation-tracker-highlights-300-cases-from-safemoon-to-pepe-the-frog",
      image_url:
        "https://crypto.snapi.dev/images/v1/k/5/840-ahr0chm6ly9zmy5jb2ludgvszwdyyxbolmnvbs91cgxvywrzlziwmjitmduvntuwogm0ndytmtzknc00nje2lwi5zmqtnmm3nddknwqzytqwlmpwzw-136852.jpg",
      title:
        "New crypto litigation tracker highlights 300 cases from SafeMoon to Pepe the Frog",
      text: "The SEC, CFTC and DOJ have seven cases either resolved or ongoing this year, with the litigation against husband-wife duo Ilya Lichtenstein and Heather Morgan being the most high profile.",
      source_name: "Cointelegraph",
      date: "Wed, 04 May 2022 23:30:07 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["SAFEMOON"],
    },
    {
      news_url:
        "https://beincrypto.com/xrp-price-prediction-3-61-by-2025-and-4-98-by-2030/",
      image_url:
        "https://crypto.snapi.dev/images/v1/x/p/xrp-inkjpegoptimal-136857.jpeg",
      title: "XRP Price Prediction: $3.61 by 2025 and $4.98 by 2030",
      text: "XRP may be worth $2.55 by December this year. That is if Ripple wins – or settles – its skirmish with the SEC The post XRP Price Prediction: $3.61 by 2025 and $4.98 by 2030 appeared first on BeInCrypto.",
      source_name: "BeInCrypto",
      date: "Wed, 04 May 2022 23:59:50 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["XRP"],
    },
    {
      news_url: "https://coingape.com/?p=111464",
      image_url:
        "https://crypto.snapi.dev/images/v1/i/k/bitcoin-lobbying-136860.jpg",
      title:
        "Sell The Rumor Buy the News, Bitcoin Gives 5% Upside After Fed Meeting",
      text: "On Wednesday, May 4, the U.S. Federal Reserve announced an interest rate hike by 50 basis points in order to control the soaring inflation. The announcement was quite on the expected lines and the U.S. equity market as well as the crypto market rallied soon after.",
      source_name: "Coingape",
      date: "Thu, 05 May 2022 00:19:14 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://cryptonews.com/news/stratis-fund-blockchain-innovation-centre-uganda.htm",
      image_url:
        "https://crypto.snapi.dev/images/v1/t/r/untitled-design-18-1651664500x4vj5cxb6i-136858.jpeg",
      title: "Stratis to Fund Blockchain Innovation Centre in Uganda",
      text: "Disclaimer: The text below is a press release that was not written by Cryptonews.com.",
      source_name: "Cryptonews",
      date: "Thu, 05 May 2022 00:16:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["STRAX"],
    },
    {
      news_url:
        "https://coinpedia.org/altcoin/worst-case-target-levels-for-bitcoin-btc-ethereum-eth-in-may/",
      image_url: "https://crypto.snapi.dev/images/v1/y/q/crypto18-136863.jpg",
      title:
        "Here are The Worst-Case Target Levels for Bitcoin (BTC) & Ethereum (ETH) in May￼",
      text: "The price of bitcoin concluded April on a bearish note, with fears that more downside pressure will persist. The Ethereum price continues to trade in a narrow range. After a sell-off in April, Bitcoin price activity picks up in May. April has historically been one of the greatest months for Bitcoin. April 2022, on the …",
      source_name: "CoinPedia",
      date: "Thu, 05 May 2022 00:45:23 -0400",
      topics: [],
      sentiment: "Negative",
      type: "Article",
      tickers: ["BTC", "ETH"],
    },
    {
      news_url:
        "https://blockchain.news/news/privacy-centric-startup-nym-technologies-secures-300m-in-funding",
      image_url:
        "https://crypto.snapi.dev/images/v1/v/l/624616f9532a6b9006d5ffbddfdefe665e110e6e7eb7a8183214b502caf9cbf1-136864.jpg",
      title:
        "Privacy-centric Startup Nym Technologies Secures $300m in Funding",
      text: "Privacy-centric startup Nym Technologies secured $300 million in financing. The new funding would create the Nym Foundation, support research on hybrid networks and privacy-enhancing technologies, and issue grants to developers.",
      source_name: "Blockchain News",
      date: "Thu, 05 May 2022 00:55:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["NYM"],
    },
    {
      news_url:
        "https://www.newsbtc.com/analysis/eth/ethereum-regains-strength-3k/",
      image_url:
        "https://crypto.snapi.dev/images/v1/j/d/shutterstock-199289291-136865.jpg",
      title: "TA: Ethereum Regains Strength But $3K Is Still A Major Hurdle",
      text: "Ethereum started a decent increase above the $2,920 resistance against the US Dollar. ETH must clear $2,980 and $3,000 to continue higher in the near term.",
      source_name: "NewsBTC",
      date: "Thu, 05 May 2022 01:08:24 -0400",
      topics: ["tanalysis"],
      sentiment: "Positive",
      type: "Article",
      tickers: ["ETH"],
    },
    {
      news_url:
        "https://crypto.news/valkyrie-launches-single-asset-trust-for-avalanche-avax/",
      image_url:
        "https://crypto.snapi.dev/images/v1/o/e/avalanche-aims-to-accelerate-subnet-adoption-with-multiverse-incentive-program-136867.jpg",
      title: "Valkyrie Launches Single-Asset Trust for Avalanche (AVAX)",
      text: "Investments is at the forefront of this trend. The crypto asset management firm has today revealed the launch of its first trust in Avalanche (AVAX).",
      source_name: "Crypto news",
      date: "Thu, 05 May 2022 02:00:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["AVAX"],
    },
    {
      news_url: "https://u.today/shiba-inu-and-dogecoin-now-accepted-by-gucci",
      image_url: "https://crypto.snapi.dev/images/v1/r/e/14571-136868.jpg",
      title: "Shiba Inu and Dogecoin Now Accepted by Gucci",
      text: "Gucci has started accepting several major cryptocurrencies, including meme coins and stablecoins",
      source_name: "UToday",
      date: "Thu, 05 May 2022 02:17:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["DOGE", "SHIB"],
    },
    {
      news_url:
        "https://ambcrypto.com/heres-why-a-rally-might-be-on-the-cards-for-ftx-token-ftt-pretty-soon/",
      image_url:
        "https://crypto.snapi.dev/images/v1/x/e/dorothea-oldani-nhij0zcq9p0-unsplash-2-136871.jpg",
      title:
        "Here's why a rally might be on the cards for FTX Token [FTT] pretty soon",
      text: "While alt coins and tokens across the board were taking price hits, investors shouldn't forget to check if these assets were running to the exchanges – or away from them. In particular, one asset to watch here was the 26th biggest crypto by market cap, FTX Token [FTT].",
      source_name: "AMBCrypto",
      date: "Thu, 05 May 2022 02:30:38 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["FTT"],
    },
    {
      news_url:
        "https://www.investingcube.com/tron-price-prediction-trx-outlook-amid-robust-usdd-inflows-cryptocurrencies/",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/7/shutterstock-1232662645-1024x576-1-136870.jpg",
      title: "Tron Price Prediction: TRX Outlook Amid Robust USDD Inflows",
      text: "What is the outlook of the Tron Price as the USDD inflows continue being vibrant? We explain what to expect in the near term.",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 02:24:02 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["TRX", "USDD"],
    },
    {
      news_url: "https://coingape.com/?p=111468",
      image_url:
        "https://crypto.snapi.dev/images/v1/m/d/avalanche-avax-gid-2-1200x628-1-136869.jpg",
      title: "Avalanche (AVAX) Prices Jump 14% On New Trust Launch, Here's Why",
      text: "Avalanche (AVAX), the 11th-largest cryptocurrency, rallied on Thursday after digital asset manager Valkyrie launched an investment trust dedicated to the token. AVAX jumped 14% in a few hours to a one-week high of $68.36.",
      source_name: "Coingape",
      date: "Thu, 05 May 2022 02:23:34 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["AVAX"],
    },
    {
      news_url:
        "https://www.investingcube.com/hedera-hashgraph-price-prediction-is-0-16-price-level-possible/",
      image_url:
        "https://crypto.snapi.dev/images/v1/7/c/hedera-hgraph-136873.jpeg",
      title:
        "Hedera Hashgraph Price Prediction: Is $0.16 Price Level Possible?",
      text: "Hedera Hashgraph is up by 2.5 per cent in today's trading session. The rise in prices is a continuation of a sideways market",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 02:50:13 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["HBAR"],
    },
    {
      news_url:
        "https://www.coinbureau.com/news/bitcoin-miner-argo-takes-out-70-million-loan-for-texas-mining-operation/",
      image_url:
        "https://crypto.snapi.dev/images/v1/p/2/shutterstock-761471737-136872.jpg",
      title:
        "Bitcoin Miner Argo Takes Out $70 Million Loan For Texas Mining Operation",
      text: "Argo Blockchain has secured over $70 million in loans to ramp up production in its new Bitcoin mining operation in Dickens County, Texas. The company is borrowing an aggregate principal amount of $70.6 million from New York Digital Investment Group (NYDIG) for Helios, the company's flagship crypto mining operation in the Lone Star state. This […] The post Bitcoin Miner Argo Takes Out $70 Million Loan For Texas Mining Operation appeared first on Coin Bureau.",
      source_name: "Coinbureau",
      date: "Thu, 05 May 2022 02:47:44 -0400",
      topics: ["mining"],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.investingcube.com/waves-price-prediction-after-the-new-neutrino-changes-cryptocurrencies/",
      image_url:
        "https://crypto.snapi.dev/images/v1/w/k/shutterstock-1840853695-136876.jpg",
      title: "Waves Price Prediction After the New Neutrino Changes",
      text: "What is the outlook of the Waves price after the latest changes to stabilize Neutrino? We explain whether it is a good buy.",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 03:01:27 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["WAVES"],
    },
    {
      news_url:
        "https://invezz.com/news/2022/05/05/ankr-launches-meta-apes-the-first-game-on-bnb-bas/",
      image_url:
        "https://crypto.snapi.dev/images/v1/e/l/where-to-buy-ankr-coin-136875.jpg",
      title: "Ankr launches Meta Apes, the first game on BNB BAS",
      text: "Meta Apes, one of the most anticipated Web3 games of 2022, is the first game to launch on BNB's new Binance Application Sidechain (BAS) architecture, Invezz learned from a press release. The game being launched by Ankr is derived from the popular Age of Apes mobile game. The purpose of the launch is to encourage […] The post Ankr launches Meta Apes, the first game on BNB BAS appeared first on Invezz.",
      source_name: "Invezz",
      date: "Thu, 05 May 2022 02:59:11 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["ANKR", "BNB"],
    },
    {
      news_url:
        "https://www.investingcube.com/bitcoin-price-prediction-btc-popped-but-dont-fight-the-fed-cryptocurrencies/",
      image_url:
        "https://crypto.snapi.dev/images/v1/d/q/shutterstock-773653330-1024x576-1-136878.jpg",
      title: "Bitcoin Price Prediction: BTC Popped, But Don't Fight the Fed",
      text: "What is the outlook of the Bitcoin price? We explain why fighting the Fed could be a risky move and what to expect.",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 03:11:00 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://coinpedia.org/price-analysis/traders-look-out-for-these-entry-levels-as-trontrx-price-poised-for-a-5x-rally-to-hit-0-2-soon/",
      image_url: "https://crypto.snapi.dev/images/v1/h/l/crypto20-136877.jpg",
      title:
        "Traders Lookout for These Entry Levels as Tron(TRX) Price Poised for A 5x Rally to Hit $0.2 Soon!",
      text: "Tron which remained under the shadows of the other popular assets has showcased its acute strength over the past couple of weeks. The TRX price raised extremely high by more than 40% from its bottoms, slicing through 50-day MA & 200-day MA levels comfortably. Moreover, the price is now aiming to slash a zero from …",
      source_name: "CoinPedia",
      date: "Thu, 05 May 2022 03:04:13 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["TRX"],
    },
    {
      news_url:
        "https://www.investingcube.com/district0x-price-prediction-are-we-likely-to-see-a-0-15-dnt-price-level/",
      image_url: "https://crypto.snapi.dev/images/v1/d/x/blockchain-136879.jpg",
      title:
        "District0x Price Prediction: Are we Likely to See a $0.15 DNT Price Level",
      text: "DNT is up by more than 2.5 per cent in today's trading session, marking a second consecutive day that the cryptocurrency is gaining",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 03:19:53 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["DNT"],
    },
    {
      news_url:
        "https://ambcrypto.com/decentraland-mana-presents-a-strong-case-for-recovery-thanks-to/",
      image_url:
        "https://crypto.snapi.dev/images/v1/6/2/barley-field-g5612b5643-1280-136882.jpg",
      title:
        "Decentraland [MANA] presents a strong case for recovery thanks to…",
      text: "The month of April not only demolished the March rally but was also responsible for the price bottoming of most of the cryptocurrencies. Decentraland's MANA suffered too along with the rest of the market and recorded a new low a few days ago.",
      source_name: "AMBCrypto",
      date: "Thu, 05 May 2022 03:30:33 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["MANA"],
    },
    {
      news_url:
        "https://www.investingcube.com/ethereum-price-prediction-will-these-gains-hold-in-may-cryptocurrencies/",
      image_url:
        "https://crypto.snapi.dev/images/v1/o/q/eth-4-e1642427189650-136881.jpg",
      title: "Ethereum Price Prediction: Will These Gains Hold in May?",
      text: "What is the outlook of the Ethereum price for May? We explain whether the coin will keep rising in May this year.",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 03:29:04 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["ETH"],
    },
    {
      news_url:
        "https://insidebitcoins.com/news/bitcoin-price-prediction-for-today-may-5-btc-price-fails-to-hold-above-40-04k",
      image_url:
        "https://crypto.snapi.dev/images/v1/z/h/btcusddaily-chart-136880.png",
      title:
        "Bitcoin Price Prediction for Today May 5: BTC Price Fails To Hold Above $40.04K",
      text: "Bitcoin May Retrace Above $38.8K as It Fails To Hold Above $40.04K – May 5, 2022 BTC price has broken the resistance at $39,223 as [...]",
      source_name: "Inside Bitcoins",
      date: "Thu, 05 May 2022 03:24:25 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://www.investingcube.com/zilliqa-price-prediction-does-this-zil-recovery-have-legs/",
      image_url: "https://crypto.snapi.dev/images/v1/m/j/zilliqa-136884.jpg",
      title: "Zilliqa Price Prediction: Does This ZIL Recovery Have Legs?",
      text: "Zilliqa price popped to the highest level since April 28th as investors came back in. What us the outlook of the coin?",
      source_name: "InvestingCube",
      date: "Thu, 05 May 2022 03:43:17 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["ZIL"],
    },
    {
      news_url: "https://coingape.com/?p=111471",
      image_url: "https://crypto.snapi.dev/images/v1/c/f/apecoin-136883.jpg",
      title: "ApeCoin Community In Favor Of Staking, Bullish Signal For APE?",
      text: "The ApeCoin community has voted in favor of three proposals linked to staking ApeCoin (APE) and restructuring its governance. The AIP-21 and AIP-22 staking proposals have received 91.55% and 91.17% votes in favor, respectively.",
      source_name: "Coingape",
      date: "Thu, 05 May 2022 03:42:43 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["APE"],
    },
    {
      news_url:
        "https://blockchain.news/news/coinshares-lists-chainlinkuniswap-etps-on-germany-stock-market-xetra",
      image_url:
        "https://crypto.snapi.dev/images/v1/p/w/f76358575ab41fa407d25d6b9c13a17207a61cb5c5cd8277fc4dfc45309a60b0-136886.jpg",
      title:
        "CoinShares Lists Chainlink, Uniswap ETPs on Germany's Stock Market Xetra",
      text: "CoinShares has launched new physically-backed exchange-traded products (ETPs) for Chainlink and Uniswap cryptocurrencies.",
      source_name: "Blockchain News",
      date: "Thu, 05 May 2022 03:55:08 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["LINK", "UNI"],
    },
    {
      news_url: "https://coingape.com/?p=111474",
      image_url:
        "https://crypto.snapi.dev/images/v1/r/c/there-is-absolutely-no-doubts-about-the-growing-popularity-of-axie-infinity-especially-with-regards-to-its-play-to-earn-feature-136888.png",
      title:
        "Axie Infinity (AXS) Rallies Past $30 On BlockFi Support, Staking Plans",
      text: "Popular gaming token Axie Infinity (AXS) rallied over the past 24 hours after introducing land staking rewards, while crypto lender BlockFi also added support for the token. AXS jumped nearly 20% to $34.56, recovering sharply from a near one-year low hit earlier in the week.",
      source_name: "Coingape",
      date: "Thu, 05 May 2022 04:21:43 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["AXS"],
    },
    {
      news_url:
        "https://ambcrypto.com/stepn-gmt-has-had-a-good-run-amid-a-poor-april-will-this-momentum-continue/",
      image_url: "https://crypto.snapi.dev/images/v1/p/9/12-136892.jpg",
      title:
        "STEPN [GMT] has had a good ‘run' amid a poor April, will this momentum continue",
      text: "The possibility of getting paid for an everyday physical activity like running is one of the good tidings that blockchain technology has provided us with. Considered the worst month so far this year in crypto history, STEPN, a move-to-earn project recorded a 35% spike in its price in April.",
      source_name: "AMBCrypto",
      date: "Thu, 05 May 2022 04:30:53 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["GMT"],
    },
    {
      news_url:
        "https://en.cryptonomist.ch/2022/05/05/bitcoin-mining-record-hashrate/",
      image_url:
        "https://crypto.snapi.dev/images/v1/b/z/bitcoin-mining-hashrate-300x200-136890.jpg",
      title: "Bitcoin mining, new record for hashrate",
      text: "Hashrate breaks 250 Ehash/s for the first time",
      source_name: "The Cryptonomist",
      date: "Thu, 05 May 2022 04:22:33 -0400",
      topics: ["mining"],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://u.today/sp500-bitcoin-and-gold-on-rise-following-historic-rate-hike-heres-whats-next",
      image_url: "https://crypto.snapi.dev/images/v1/e/w/14572-136896.jpg",
      title:
        "S&P500, Bitcoin and Gold on Rise Following Historic Rate Hike: Here's What's Next",
      text: "Here's how financial assets act during historical financial event",
      source_name: "UToday",
      date: "Thu, 05 May 2022 04:38:00 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url:
        "https://coinpedia.org/price-analysis/will-the-fomc-boosts-propel-the-bitcoinbtc-ethereumeth-price-above-44k-3200-resp/",
      image_url: "https://crypto.snapi.dev/images/v1/a/5/crypto1-136893.jpg",
      title:
        "Will The FOMC Boosts Propel the Bitcoin(BTC) & Ethereum(ETH) Price Above $44K & $3200 Resp?",
      text: "The Federal Reserve in a recent meeting approved an increase of a half-per cent of the interest rate. It also announced its plans to squeeze its $9 trillion asset portfolio in an attempt to reduce the inflation which is running at a 4-decade high. Major Stocks, Cryptos and Gold witnessed a significant spike, while the …",
      source_name: "CoinPedia",
      date: "Thu, 05 May 2022 04:33:11 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC", "ETH"],
    },
    {
      news_url: "https://coingape.com/?p=111507",
      image_url:
        "https://crypto.snapi.dev/images/v1/m/r/106574151-1591889498658powell-e1651740172333-136898.jpg",
      title:
        "Bitcoin (BTC) Price Spikes Following Feds agreement to increase interest rates",
      text: "Bitcoin (BTC) has surged, courtesy of the Feds decision to increase interest rates. The cryptocurrency soared closer to $40,000, and is still sustaining gains at press time.",
      source_name: "Coingape",
      date: "Thu, 05 May 2022 04:43:22 -0400",
      topics: [],
      sentiment: "Positive",
      type: "Article",
      tickers: ["BTC"],
    },
    {
      news_url: "https://coingape.com/?p=111509",
      image_url: "https://crypto.snapi.dev/images/v1/r/y/lido-136902.png",
      title: "DeFi Protocol Lido Finance Hits A Whopping $19.52 Billion In TLV",
      text: "Lido Finance, a liquid staking solution for ETH 2.0, has emerged as the DeFi protocol with the highest trading volume, according to data from TVL aggregator for DeFi, DeFiLama. LidoFinance's trading volume hit $19.52 billion, as 7-days consecutive value remains bullish.",
      source_name: "Coingape",
      date: "Thu, 05 May 2022 05:01:37 -0400",
      topics: [],
      sentiment: "Neutral",
      type: "Article",
      tickers: ["LDO"],
    },

  ],
};


export default data;