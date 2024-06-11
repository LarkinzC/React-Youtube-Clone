import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const PROCESS_API_RAPID_API_KEY = process.env.PROCESS_API_RAPID_API_KEY

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': PROCESS_API_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const FetchFromAPI = async (url) => {
    const { data } = await axios.get
    (`${BASE_URL}/ ${url}`, options)

    return data
}