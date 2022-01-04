import { useState, useEffect } from "react"
import axios from "axios"
export const useNews = () => {
  const [bitcoinNews, setBitcoinNews] = useState([])
  const [teslaNews, setTeslaNews] = useState([])
  const [appleNews, setAppleNews] = useState([])

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f696d1c29db04575bef1ff324a28e1b9"
      )

      let data = response.data.articles
      setBitcoinNews(data)
    }
    getData()
  }, [])

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-12-04&sortBy=publishedAt&apiKey=f696d1c29db04575bef1ff324a28e1b9"
      )
      let data = response.data.articles
      setTeslaNews(data)
    }
    getData()
  }, [])
  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&from=2022-01-03&to=2022-01-03&sortBy=popularity&apiKey=f696d1c29db04575bef1ff324a28e1b9"
      )
      let data = response.data.articles
      setAppleNews(data)
    }
    getData()
  }, [])

  return { bitcoinNews, teslaNews, appleNews }
}
