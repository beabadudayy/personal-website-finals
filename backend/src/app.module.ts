import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';

/**
 * Main application module
 * Imports all feature modules
 */
@Module({
  imports: [CommentsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
