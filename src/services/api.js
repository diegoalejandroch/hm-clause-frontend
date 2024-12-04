import axios from 'axios';
// Crear una instancia de Axios con configuración predeterminada
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com', // URL base configurable
    timeout: 10000, // Tiempo de espera en milisegundos
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Enviar cookies y encabezados de autenticación
});

// Interceptor para manejo global de errores
api.interceptors.response.use(
    (response) => {
        return response.data; // Simplificar el acceso a los datos
    },
    (error) => {
        if (error.response) {
            const { status } = error.response;
            const { message } = error.response.data;

            if (status === 401 && message === 'Unauthorized') {
                // Redirigir a login o manejar sesión expirada
                window.location.href = '/login';
            }
            return Promise.reject(error.response.data);
        }
        return Promise.reject(error);
    }
);

export default api;
