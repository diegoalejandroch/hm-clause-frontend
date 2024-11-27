import axios from 'axios';
// Crear una instancia de Axios con configuración predeterminada
const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.example.com', // URL base configurable
    timeout: 10000, // Tiempo de espera en milisegundos
    headers: {
        'Content-Type': 'application/json',
    },
});
// Interceptor para agregar tokens (Autenticación)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Cambia según cómo almacenes el token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
// Interceptor para manejo global de errores
api.interceptors.response.use(
    (response) => {
        return response.data; // Simplificar el acceso a los datos
    },
    (error) => {
        console.error('Error en la respuesta:', error.response || error.message);

        // Manejo específico de errores HTTP
        if (error.response) {
            const { status } = error.response;
            if (status === 401) {
                // Redirigir a login o manejar sesión expirada
                window.location.href = '/login';
            }
        }

        return Promise.reject(error);
    }
);

export default api;
