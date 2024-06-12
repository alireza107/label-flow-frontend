const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="w-80 animate-pulse rounded-lg bg-base-200 p-4">
      <div className="mb-4 h-[200px] w-full animate-pulse rounded-lg bg-base-75" />
      <p className="mb-2 h-6 w-1/2 animate-pulse rounded-md bg-base-75" />
      <p className="h-4 w-1/3 animate-pulse rounded-md bg-base-75" />
    </div>
  );
};

export default ProjectCardSkeleton;
