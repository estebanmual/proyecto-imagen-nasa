const BASE_URL = process.env.NASA_BASE_URL;
const API_KEY = process.env.NASA_API_KEY;

const fetcher = async (queryParams?: string) => {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}${queryParams?.length ? queryParams : ''}`);
        const data = await response.json();

        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error)
    }
};

export default fetcher;