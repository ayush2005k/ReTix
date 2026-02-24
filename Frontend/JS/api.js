/**
 * ReTix API Utility
 * Focus: Backend Communication (Spring Boot)
 */

const BASE_URL = 'http://localhost:8080/api'; // Update with your Spring Boot port

const ReTixAPI = {
    // 1. Get all events for the browse page
    getEvents: async () => {
        try {
            const response = await fetch(`${BASE_URL}/events`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching events:", error);
            return [];
        }
    },

    // 2. Submit ticket for verification (Multipart for Images)
    submitTicket: async (formData) => {
        try {
            const response = await fetch(`${BASE_URL}/tickets/upload`, {
                method: 'POST',
                body: formData // Note: Don't set Content-Type header when sending FormData
            });
            return await response.json();
        } catch (error) {
            console.error("Error uploading ticket:", error);
            return { success: false, message: "Server connection failed" };
        }
    },

    // 3. User Authentication
    login: async (credentials) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            return await response.json();
        } catch (error) {
            console.error("Login failed:", error);
        }
    }
};