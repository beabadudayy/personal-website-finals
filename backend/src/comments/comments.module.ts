import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';

/**
 * Comments Module
 * Handles all comment/guestbook related functionality
 */
@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
