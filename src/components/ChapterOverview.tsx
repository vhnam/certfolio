import type { Chapter } from '@/models/certificate';

interface ChapterOverviewProps {
  chapters: Chapter[];
  slug: string;
}

export const ChapterOverview = ({ chapters, slug }: ChapterOverviewProps) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-6'>
        Course Structure
      </h2>
      <div className='space-y-6'>
        {chapters.map((chapter, index) => (
          <div
            key={chapter.title}
            className='border border-gray-200 dark:border-gray-700 rounded-lg p-4 md:p-6'
          >
            <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-50 mb-3'>
              Chapter {index + 1}. {chapter.title}
            </h3>
            <ul className='space-y-2'>
              {chapter.lessons.map((lesson) => (
                <li key={lesson.title}>
                  <a
                    href={lesson.slug}
                    className='!text-blue-600 dark:!text-blue-400 hover:!text-blue-700 dark:hover:!text-blue-300 hover:underline text-sm'
                  >
                    {lesson.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
