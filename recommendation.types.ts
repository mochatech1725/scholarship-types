import type { TRecommendationStatus } from './application.constants';

export interface Recommendation {
  recommendation_id?: number;
  application_id: number;
  recommender_id: number;
  submitted_at?: Date | null;
  due_date?: Date;
  status: TRecommendationStatus;
  created_at?: Date | null;
  updated_at?: Date | null;
}