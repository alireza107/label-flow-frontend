import { MultiAvatar } from '@/components/multi-avatar/multi-avatar';

import ProjectCard from './(projects)/_components/project_card';

export default function Home(): JSX.Element {
  return (
    <div className="p-10">
      <ProjectCard
        title="Abstract Colors"
        creator="Esthera Jackson"
        image="/images/project.png"
        isFavorite={false}
      />

      <MultiAvatar
        avatars={[
          '/images/profile.jpg',
          '/images/profile.jpg',
          '/images/profile.jpg',
          '/images/profile.jpg',
          '/images/profile.jpg',
          '/images/profile.jpg',
        ]}
        size="small"
        max={4}
      />
    </div>
  );
}
