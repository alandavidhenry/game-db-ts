import axios from "axios";

const apiKey = process.env.REACT_APP_RAWG_API_KEY;

if (!apiKey) {
    throw new Error('REACT_APP_RAWG_API_KEY is not defined');
}

const axiosInstance = axios.create({
    baseURL: 'https://corsproxy.io/https://api.rawg.io/api',
    params: {
        key: apiKey,
    },
});

const getGenres = () => axiosInstance.get('/genres').catch(handleError);
const getAllGames = () => axiosInstance.get('/games').catch(handleError);
const getTopFiveGames = () => axiosInstance.get('/games', { params: { page_size: 5 } }).catch(handleError);

const handleError = (error: any) => {
    console.error('API request error', error);
    throw error;
}

export { getGenres, getAllGames, getTopFiveGames };