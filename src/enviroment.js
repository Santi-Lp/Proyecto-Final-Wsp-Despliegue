const ENVIROMENT = {
    API_URL:
        process.env.NODE_ENV === "production"
            ? "https://backend-final-wsp-despliegue.vercel.app" // URL del backend en producción
            : "http://localhost:5000", // URL del backend en desarrollo
};

export default ENVIROMENT;
