import { useEffect, useState } from "react"
import { fecthData } from "../helpers/fetchData.js"

export const useFetchData = (endPoint) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const getData = async () => {
    const { data, isLoading} = await fecthData(endPoint)
    setData(data)
    setIsLoading(isLoading)
  }


  useEffect(() => {
    getData()
  }, [endPoint])

  return {
    data,
    isLoading
  }
}
