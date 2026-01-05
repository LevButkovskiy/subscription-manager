import axios from 'axios';
import { setupInterceptors } from './interceptors';

const API_URL = import.meta.env.VITE_API_URL;

export const apiInstance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

setupInterceptors();
