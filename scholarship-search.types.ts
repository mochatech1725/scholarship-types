
export interface SearchCriteria {
  subject_areas: string[]
  keywords: string
  academic_level: string | null
  target_type: string | null
  gender: string | null
  ethnicity: string | null
  geographic_restrictions: string | null
  essay_required: boolean | null
  recommendation_required: boolean | null
  academic_gpa?: number
  min_award?: number
  max_award?: number
  deadline_range?: {
    start_date?: string 
    end_date?: string
  }
}


export interface SearchOptions {
  maxResults?: number;
  sortBy?: 'relevance' | 'deadline' | 'amount' | 'title';
  sortOrder?: 'asc' | 'desc';
  includeExpired?: boolean;
}