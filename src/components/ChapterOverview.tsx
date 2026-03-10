import type { Chapter } from '@/models/certificate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChapterOverviewProps {
  chapters: Chapter[];
  slug: string;
}

export const ChapterOverview = ({ chapters, slug }: ChapterOverviewProps) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-foreground mb-6'>
        Course Structure
      </h2>
      <div className='space-y-6'>
        {chapters.map((chapter, chapterIndex) => (
          <Card key={`${chapterIndex}-${chapter.title}`} className='md:py-6'>
            <CardHeader className='pb-3'>
              <CardTitle>
                <h3 className='text-lg font-semibold text-foreground'>
                  Chapter {chapterIndex + 1}. {chapter.title}
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className='pt-0'>
              <ul className='space-y-1' role='list'>
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <li key={`${lessonIndex}-${lesson.slug}`}>
                    <a
                      href={`/certificates/${slug}/${lesson.slug}`}
                      className='inline-flex items-center min-h-10 py-2 text-sm font-medium !text-blue-600 dark:!text-blue-400 hover:!text-blue-700 dark:hover:!text-blue-300 hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded'
                    >
                      {lesson.title}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
