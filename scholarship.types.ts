import type { 
  SubjectArea, 
} from './application.constants.js';
export interface Scholarship {
  scholarship_id?: number;
  title: string;
  description?: string;
  organization?: string;
  org_website?: string;
  target_type?: string;
  subject_areas?: SubjectArea[];
  min_award?: number;
  max_award?: number;
  deadline?: string;
  eligibility?: string;
  gender?: string;
  ethnicity?: string;
  academic_level?: string;
  essay_required?: boolean;
  recommendation_required?: boolean;
  renewable?: boolean;
  geographic_restrictions?: string;
  apply_url?: string;
  url?: string;
  source?: string;
  country?: string;
  active?: boolean;
  created_at?: Date;
  updated_at?: Date;
}