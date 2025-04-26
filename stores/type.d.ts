// types.d.ts
export type ExpertiseLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type ProjectStatus = 'completed' | 'in-progress' | 'on-hold' | 'planned';

interface TechStackItem {
  label: string;
  expertise?: ExpertiseLevel;
  icon?: string;
}

interface KeyFeature {
  label: string;
  description: string;
}

export interface PersonalProject {
  id: number;
  name: string;
  slug: string;
  projectOverview: string;
  startDate: string; // ISO format (YYYY-MM-DD)
  endDate: string | null;
  status: ProjectStatus;
  thumbnail?: string;
  link?: string;
  featured: boolean;
  keyFeatures: KeyFeature[];
  role: string;
  teamSize: number;
  problemSolved: string[];
  techStack: TechStackItem[];
  screenshots?: string[];
}
export interface CategorizedSkill {
  label: string;
  icon: string;
  skills: TechStackItem[];
}