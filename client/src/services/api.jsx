import axios from "axios";
const API_URL = "http://localhost:8080"

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchData = async (endpoint) => {
    try {
        const response = await api.get(endpoint);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const createData = async (endpoint, data) => {
    try {
        const response = await api.post(endpoint, data)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
}