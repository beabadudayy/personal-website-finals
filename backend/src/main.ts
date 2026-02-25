import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Bootstrap the NestJS application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // hello
  // Enable CORS for frontend communication
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization',
  });

  // Set global prefix for API routes
  app.setGlobalPrefix('api');

  // Get port from environment variable or use default
  const port = process.env.PORT || 3001;
  
  await app.listen(port);
  console.log(`🚀 Backend server is running on port ${port}`);
}

bootstrap();
