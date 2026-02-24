import { createClient, SupabaseClient } from '@supabase/supabase-js';

/**
 * Supabase Database Service
 * Handles all database operations using Supabase client
 */
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    // Validate that required environment variables are set
    if (!supabaseUrl || !supabaseKey) {
      throw new Error(
        'Missing Supabase credentials. Please set SUPABASE_URL and SUPABASE_ANON_KEY environment variables.'
      );
    }

    // Initialize Supabase client
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  /**
   * Get Supabase client instance
   */
  getClient(): SupabaseClient {
    return this.supabase;
  }
}
