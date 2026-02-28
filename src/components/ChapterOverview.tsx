import type { Chapter } from '@/models/certificate';

interface ChapterOverviewProps {
  chapters: Chapter[];
}

export const ChapterOverview = ({ chapters }: ChapterOverviewProps) => {
  return (
    <div>
      <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
        Course Structure
      </h2>
      <div className='space-y-6'>
        {chapters.map((chapter, index) => (
          <div
            key={chapter.title}
            className='border border-gray-200 rounded-lg p-4 md:p-6'
          >
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              Chapter {index + 1}. {chapter.title}
            </h3>
            <ul className='space-y-2'>
              {chapter.lessons.map((lesson) => (
                <li key={lesson.title}>
                  <a
                    href={lesson.slug}
                    className='text-blue-600 hover:text-blue-700 hover:underline text-sm'
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
