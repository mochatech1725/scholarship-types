export interface Recommender {
  recommender_id?: number;
  user_id: number;
  first_name: string;
  last_name: string;
  email_address: string;
  relationship?: string;
  phone_number?: string;
  created_at?: Date;
  updated_at?: Date;
} 