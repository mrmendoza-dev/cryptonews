import { useState, useEffect } from 'react'
import './css/App.css'
import "./css/News.css";
import {nanoid} from "nanoid"
import logo from "./assets/logo.png";
import styled from "styled-components";
import newsData from "./data/cryptonews_data";
import Footer from "./components/Nav/Footer";
import Header from "./components/Nav/Header";



const Percent = styled.p<{ data: number }>`
  color: ${(props: any) =>
    props.data === 0
      ? "var(--clr-fontAccent)"
      : props.data > 0
      ? "var(--clr-gain)"
      : "var(--clr-loss)"};
`;


function App() {
  // const [news, setNews] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [currentVideo, setCurrentVideo] = useState();
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
      // fetch("./src/data/cryptonews_light.json")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     let articles: any = [];
      //     let videos: any = [];
      //     let cropped = data.data.slice(0, 1000);
      //     console.log(cropped);
      //     cropped.forEach((item: any) => {
      //       if (item.type === "Article") {
      //         articles.push(item)
      //       } else if (item.type === "Video") {
      //         videos.push(item)
      //       }
      //     });
      //     setArticles(articles);
      //     setVideos(videos);
      //   });
      let articles: any = [];
      let videos: any = [];
      let cropped = newsData.data.slice(0, 1000);
      console.log(cropped);
      cropped.forEach((item: any) => {
        if (item.type === "Article") {
          articles.push(item);
        } else if (item.type === "Video") {
          videos.push(item);
        }
      });
      setArticles(articles);
      setVideos(videos);

    }


  useEffect(getCryptoData, []);
  useEffect(getGlobalData, []);
  useEffect(getNews, []);

  useEffect(()=> {
    setCurrentVideo(videos[0])
  }, [videos])



  return (
    <div className="App">
      <Header globalData={globalData} title={"CryptoNews"} />

      <div className="News">
        <div className="news-video">
          <div className="video-showcase">
            {videos.slice(0, 1).map((article) => {
              let videoLink = article.news_url.replace("watch?v=", "embed/");

              return (
                <div key={nanoid()} className="">
                  <iframe className="video-frame" src={videoLink}></iframe>
                </div>
              );
            })}

            {/* <iframe
                className="video-frame"
                src={currentVideo.news_url.replace("watch?v=", "embed/")}
              ></iframe> */}
          </div>
        </div>

        <div className="news-latest">
          {articles.map((article) => {
            return (
              <div key={nanoid()} className="news-card">
                <a
                  className="news-img-box"
                  href={article.news_url}
                  target="_blank"
                  rel="noopener"
                >
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
      <Footer title={"CryptoNews"} />
    </div>
  );
}

export default App
