import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateCommentDto } from './dto/create-comment.dto';

/**
 * Comments Service
 * Business logic for comment operations
 */
@Injectable()
export class CommentsService {
  private supabaseService: SupabaseService;

  constructor() {
    this.supabaseService = new SupabaseService();
  }

  /**
   * Retrieve all comments from the database
   * Ordered by creation date (newest first)
   */
  async findAll() {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      throw new Error('Failed to fetch comments from database');
    }

    return data;
  }

  /**
   * Create a new comment in the database
   */
  async create(createCommentDto: CreateCommentDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('comments')
      .insert([
        {
          name: createCommentDto.name,
          email: createCommentDto.email,
          message: createCommentDto.message,
        },
      ])
      .select();

    if (error) {
      console.error('Database error:', error);
      throw new Error('Failed to create comment in database');
    }

    return data[0];
  }
}
