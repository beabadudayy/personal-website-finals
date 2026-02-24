import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstrap the NestJS application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for frontend communication
  app.enableCors({
    origin: process.env.FRONTEND_URL || '*', // Allow frontend URL or all origins in development
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Set global prefix for API routes
  app.setGlobalPrefix('api');

  // Get port from environment variable or use default
  const port = process.env.PORT || 3001;
  
  await app.listen(port);
  console.log(`🚀 Backend server is running on port ${port}`);
}

bootstrap();
