// types.d.ts
export type ExpertiseLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type ProjectStatus = 'completed' | 'in-progress' | 'on-hold' | 'planned';

export interface TechStackItem {
  label: string;
  expertise: ExpertiseLevel;
  icon?: string;
}

export interface PersonalProject {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  startDate: string; // ISO format (YYYY-MM-DD)
  endDate: string | null;
  status: ProjectStatus;
  preview: string;
  thumbnail?: string;
  link?: string;
  repo?: string;
  featured: boolean;
  category: string;
  role: string;
  teamSize: number;
  challenges?: string;
  achievements?: string;
  techStack: TechStackItem[];
  screenshots?: string[];
  learnings?: string;
  futurePlans?: string;
}