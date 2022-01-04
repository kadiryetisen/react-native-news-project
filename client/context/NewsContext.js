import { createContext } from "react"

export const NewsContext = createContext({
  bitcoinNews: [],
  teslaNews: [],
  businessNews: [],
  techNews: [],
  wallStreetNews: [],
})
