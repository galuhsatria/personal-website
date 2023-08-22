export interface ProjectsProps {
  id: number;
  src: string;
  title: string;
  description: string;
  techs: string[];
  code: string;
  visit: string;
}

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  header: string;
}
