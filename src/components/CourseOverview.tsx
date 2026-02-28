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
    <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6 mb-12 mt-8'>
      <h2 className='flex items-center gap-2 text-lg font-semibold !text-blue-900 mb-3 !mt-0'>
        <IconInfoCircle className='w-5 h-5' />
        About This Course
      </h2>
      <div className='[&_p]:!text-blue-900 ![&_p]:leading-relaxed ![&_p]:mb-4'>
        {children}
      </div>
      <div className='flex items-center gap-6 text-sm !text-blue-800'>
        <div className='flex items-center gap-1.5'>
          <IconBook className='size-4' />
          <span>{totalChapters} chapters</span>
        </div>
        <div>{totalLessons} lessons total</div>
      </div>
    </div>
  );
};
