import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SUMS API',
            version: '1.0.0',
            description: 'API REST para el Sistema Unificado de Manejo de Salud (SUMS)',
        },
        servers: [
            {
              url: `http://localhost:${process.env.PORT || 3000}/sums`,
              description: 'Development server',
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

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;