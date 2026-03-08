import type { Chapter } from '@/models/certificate';
import { IconBook, IconInfoCircle } from '@tabler/icons-react';
import type { PropsWithChildren } from 'react';

interface OverviewProps extends PropsWithChildren {
  chapters: Chapter[];
}

export const CourseOverview = ({ chapters, children }: OverviewProps) => {
  const totalChapters = chapters.length;
  const totalLessons = chapters.reduce(
    (acc, chapter) => acc + chapter.lessons.length,
    0
  );

  return (
    <div className='bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 md:p-6 mb-12 mt-8'>
      <h2 className='flex items-center gap-2 !text-lg font-semibold !text-indigo-900 dark:!text-indigo-200 mb-4 !mt-0'>
        <IconInfoCircle className='w-5 h-5' aria-hidden />
        About This Course
      </h2>
      <div className='[&_p]:!text-red-900 dark:[&_p]:!text-red-100 ![&_p]:leading-relaxed ![&_p]:mb-4'>
        {children}
      </div>
      <div className='flex items-center gap-6 text-sm !text-red-800 dark:!text-red-300'>
        <div className='flex items-center gap-1.5'>
          <IconBook className='size-4' aria-hidden />
          <span>{totalChapters} chapters</span>
        </div>
        <div>{totalLessons} lessons total</div>
      </div>
    </div>
  );
};
