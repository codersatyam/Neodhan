import axios from 'axios';
import config from '../config/general-config';

class AuthService {
    constructor() {
        this.baseURL = process.env.REACT_APP_API_BASE_URL;
        this.tokenKey = config.AUTH.TOKEN_KEY;
        this.apiKey = process.env.REACT_APP_API_KEY;
    }

    // Initialize axios instance with interceptors
    initializeAxios() {
        const instance = axios.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Request interceptor to add token
        instance.interceptors.request.use(
            (config) => {
                const token = this.getToken();
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                if (this.apiKey) {
                    config.headers['x-api-key'] = this.apiKey;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response interceptor to handle token refresh
        instance.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.response.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const token = await this.handleTokenRefresh();
                        this.setToken(token);
                        originalRequest.headers['Authorization'] = `Bearer ${token}`;
                        return instance(originalRequest);
                    } catch (err) {
                        this.logout();
                        window.location.href = '/login';
                        return Promise.reject(err);
                    }
                }
                return Promise.reject(error);
            }
        );

        return instance;
    }

    // Token management
    setToken(token) {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

    getRefreshToken() {
        return localStorage.getItem(config.AUTH.REFRESH_TOKEN_KEY);
    }

    setRefreshToken(token) {
        localStorage.setItem(config.AUTH.REFRESH_TOKEN_KEY, token);
    }

    isAuthenticated() {
        const token = this.getToken();
        return !!token; // Returns true if token exists
    }

    // Helper method to handle token expiry and refresh
    async handleTokenRefresh() {
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) {
            throw new Error('No refresh token available');
        }

        try {
            const response = await fetch(`${this.baseURL}/api/v1/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh token');
            }

            const data = await response.json();
            this.setToken(data.accessToken);
            return data.accessToken;
        } catch (error) {
            this.removeToken();
            throw error;
        }
    }

    // Auth methods
    async login(credentials) {
        try {
            const response = await this.api.post('/auth/login', credentials);
            if (response.data.access_token) {
                this.setToken(response.data.access_token);
            }
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    async requestDemoToken(demoDetails) {
        try {
            const response = await this.api.post('/demo/token', demoDetails);
            if (response.data.access_token) {
                this.setToken(response.data.access_token);
            }
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    logout() {
        this.removeToken();
    }

    // Error handling
    handleError(error) {
        if (error.response) {
            return {
                status: error.response.status,
                message: error.response.data.message || 'An error occurred'
            };
        }
        return {
            status: 500,
            message: 'Network error occurred'
        };
    }
}

export const authService = new AuthService(); 