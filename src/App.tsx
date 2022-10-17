import { useState, useEffect } from 'react'
import './css/App.css'
import "./css/Nav.css";
import "./css/News.css";

import {nanoid} from "nanoid"
import logo from "./assets/logo.png";
import DarkMode from "./components/DarkMode";
import styled from "styled-components";


const Percent = styled.p<{ data: number }>`
  color: ${(props: any) =>
    props.data === 0
      ? "var(--clr-fontAccent)"
      : props.data > 0
      ? "var(--clr-gain)"
      : "var(--clr-loss)"};
`;


function App() {
  const [news, setNews] = useState([]);
  const [cryptos, setCryptos] = useState([]);
  const [globalData, setGlobalData] = useState({
    active_cryptocurrencies: 0,
    markets: 0,
    market_cap_change_percentage_24h_usd: 0,
    total_market_cap: { usd: 0 },
    total_volume: { usd: 0 },
    market_cap_percentage: { btc: 0, eth: 0 },
  });


  const coingeckoUrl = "https://www.coingecko.com/en/coins/";
  const baseUrl = "https://api.coingecko.com/api/v3/";
  const currency = "usd";
  const order = "market_cap_desc";
  const perPage = "100";
  const sparkline = "true";
  const pricePercentage = "1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y";

  const cryptosUrl = `${baseUrl}coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${String(
    1
  )}&sparkline=${sparkline}&price_change_percentage=${pricePercentage}`;
  const globalUrl = "https://api.coingecko.com/api/v3/global";

  function getCryptoData() {
    fetch(cryptosUrl)
      .then((res) => res.json())
      .then((data) => {
        setCryptos(data);
      });
  }

  function getGlobalData() {
    fetch(globalUrl)
      .then((res) => res.json())
      .then((data) => {
        setGlobalData(data.data);
      });
  }

    function getNews() {
      fetch("./src/data/cryptonews_light.json")
        .then((res) => res.json())
        .then((data) => {
          let cropped = data.slice(0,100)
          setNews(cropped);
        });
    }


  useEffect(getCryptoData, []);
  useEffect(getGlobalData, []);
  useEffect(getNews, []);





  return (
    <div className="App">
      <div className="Header">
        <div className="main-header">
          <a href="/">
            <div className="header-title">
              <img src={logo} />
              <p>CryptoNews</p>
            </div>
          </a>
          <DarkMode />
        </div>

        <div className="sub-header">
          <p>
            Coins: {Number(globalData.active_cryptocurrencies).toLocaleString()}
          </p>
          <p>Exchanges: {globalData.markets.toLocaleString()}</p>
          <div className="market-change">
            <p>
              Market Cap: $
              {globalData.total_market_cap.usd.toLocaleString(undefined, {
                maximumFractionDigits: 0,
              })}
            </p>
            <Percent data={globalData.market_cap_change_percentage_24h_usd}>
              {globalData.market_cap_change_percentage_24h_usd.toFixed(2)}%
              {globalData.market_cap_change_percentage_24h_usd > 0 ? (
                <i className="fa-solid fa-caret-up"></i>
              ) : (
                <i className="fa-solid fa-caret-down"></i>
              )}
            </Percent>
          </div>

          <p>
            24h Vol: $
            {Number(globalData.total_volume.usd).toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </p>
          <div className="crypto-dominance">
            <p>Dominance:</p>
            <p>BTC {globalData.market_cap_percentage.btc.toFixed(1)}%</p>
            <p>ETH {globalData.market_cap_percentage.eth.toFixed(1)}%</p>
          </div>
        </div>
        {/* <p>Gas: {globalData.active_cryptocurrencies}</p> */}
      </div>

      <div className="News">
        <div className="news-video"></div>
        <div className="news-latest">
          {news
            .filter((article) => article.type === "Article")
            .map((article) => {
              return (
                <div key={nanoid()} className="news-card">
                  <a className="news-img-box" href={article.news_url} target="_blank" rel="noopener">
                    <img className="news-img" src={article.image_url} />
                  </a>

                  <div className="news-info">
                    <a href={article.news_url} target="_blank" rel="noopener">
                      <p className="news-title">{article.title}</p>
                    </a>
                    <div className="news-subheader">
                      <p className="news-source">{article.source_name}</p>
                      <p className="news-date">{article.date}</p>
                    </div>
                    <p className="news-text">{article.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App
