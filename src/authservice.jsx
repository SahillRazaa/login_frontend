import axios from 'axios';

const API_URL = "http://localhost:8000/api/user";

export const register = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error("Error during registration", error);
        throw error;
    }
};

export const login = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8000/api/user/login', userData);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            // Request was made but no response received
            console.error('Error request:', error.request);
        } else {
            // Something else happened
            console.error('Error message:', error.message);
        }
        throw error;
    }
};
