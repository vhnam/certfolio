export interface Certificate {
  title: string;
  description: string;
  link: string;
  completed: boolean;
  certificateLink: string | null;
  completedDate: string | null;
  chapters: Chapter[];
}

export interface Chapter {
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  slug: string;
}
