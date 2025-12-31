
export interface Project {
  id: string;
  title: string;
  category: 'programming' | 'art' | 'motion';
  description: string;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
