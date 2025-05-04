import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SUMS API',
            version: '1.0.0',
            description: 'API REST para el Sistema Unificado de Manejo de Salud (SUMS)',
        },
        servers: [
            {
                url: 'http://localhost:3000/sums',
                description: 'Servidor de desarrollo',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [{
            bearerAuth: [],
        }],
    },
    apis: ['./src/**/*.ts'], // Rutas a los archivos que contienen la documentación
};

export const swaggerSpec = swaggerJSDoc(options);