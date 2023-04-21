const API = "https://api.themoviedb.org/3"
const API_KEY = process.env.REACT_APP_API_KEY

export const get = async (url) => {
  const response = await fetch(`${API}${url}`,{
    headers: {
        Authorization: 
        `Bearer ${API_KEY}`,
        'Content-Type': 'application/json;charset=utf-8'
    }
  })
  const data = await response.json()
  return data.results
}
