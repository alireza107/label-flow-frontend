import Image from 'next/image';

import { Button } from '@/components/button';
import { IconFavorite } from '@/components/icons';

type ProjectCardProps = {
  title: string;
  image: string;
  creator: string;
  isFavorite: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, creator, image, isFavorite }) => {
  return (
    <div className="card">
      <figure className="relative mb-4">
        <Image className="rounded-lg" src={image} alt={title} width={318} height={200} />
        <Button shape="circle" className="absolute right-2 top-2">
          <IconFavorite
            stroke={'var(--color-primary)'}
            fill={isFavorite ? 'var(--color-primary)' : 'transparent'}
            strokeWidth={2}
          />
        </Button>
      </figure>
      <div className="card-body">
        <div>
          <p className="card-title">{title}</p>
          <p className="card-creator">{`By ${creator}`}</p>
        </div>
      </div>
      <div className="card-footer">
        <Button size="small" variant="primary">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
