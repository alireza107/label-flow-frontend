'use client';

import { useEffect } from 'react';

import { useNotificationStore } from '@/store/notification.store';

import ProjectCard from './(projects)/_components/project-card/project-card';
import ProjectCardSkeleton from './(projects)/_components/project-card/project-card-skeleton';

export default function Home(): JSX.Element {
  const showNotification = useNotificationStore((state) => state.showNotification);

  useEffect(() => {
    showNotification({
      message: 'sample error message',
      type: 'error',
    });
  }, []);

  return (
    <div className="flex gap-2 p-10">
      <ProjectCard
        title="Abstract Colors"
        creator="Esthera Jackson"
        image="/images/project.png"
        isFavorite={false}
      />
      <ProjectCardSkeleton />
    </div>
  );
}
