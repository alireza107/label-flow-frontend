import ProjectCard from './(projects)/_components/project-card/project-card';
import ProjectCardSkeleton from './(projects)/_components/project-card/project-card-skeleton';

export default function Home(): JSX.Element {
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
