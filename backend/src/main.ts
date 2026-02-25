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
  const allowedOrigins = [
    'https://personalwebsitefinalsjuvida.vercel.app',
    'https://personal-website-finals-nine-ruddy.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://localhost:4173',
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
  ];
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      // Allow any localhost port for local development
      if (/^http:\/\/localhost:\d+$/.test(origin)) return callback(null, true);
      // Allow all vercel.app preview deployments for this project
      if (/^https:\/\/(personalwebsitefinalsjuvida|personal-website-finals)[\w-]*\.vercel\.app$/.test(origin)) return callback(null, true);
      if (/\.vercel\.app$/.test(origin) && origin.includes('raiza-joy-juvida')) return callback(null, true);
      return callback(new Error('Not allowed by CORS'));
    },
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
