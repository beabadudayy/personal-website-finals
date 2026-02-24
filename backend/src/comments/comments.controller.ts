import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

/**
 * Comments Controller
 * Handles HTTP requests for comment operations
 */
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  /**
   * GET /api/comments
   * Retrieve all comments from the database
   */
  @Get()
  async findAll() {
    try {
      return await this.commentsService.findAll();
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw new HttpException(
        'Failed to fetch comments',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * POST /api/comments
   * Create a new comment in the database
   */
  @Post()
  async create(@Body() createCommentDto: CreateCommentDto) {
    try {
      // Validate input
      if (!createCommentDto.name || !createCommentDto.email || !createCommentDto.message) {
        throw new HttpException(
          'Name, email, and message are required',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(createCommentDto.email)) {
        throw new HttpException(
          'Invalid email format',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Validate message length
      if (createCommentDto.message.length > 500) {
        throw new HttpException(
          'Message must be 500 characters or less',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Create comment
      const result = await this.commentsService.create(createCommentDto);
      return result;
    } catch (error) {
      // If error is already an HttpException, re-throw it
      if (error instanceof HttpException) {
        throw error;
      }
      
      // Otherwise, log and throw internal server error
      console.error('Error creating comment:', error);
      throw new HttpException(
        'Failed to create comment',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
