import Image from 'next/image'

import { Button } from '@/components/button'
import { IconFavorite } from '@/components/icons'

import { tailwindColors } from '../../../../tailwind.config'

type ProjectCardProps = {
  title: string
  image: string
  creator: string
  isFavorite: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, creator, image, isFavorite }) => {
  return (
    <div className="card">
      <figure className="mb-4 relative">
        <Image className="rounded-lg" src={image} alt={title} width={318} height={200} />
        <Button shape="circle" className="absolute top-2 right-2">
          <IconFavorite
            stroke={tailwindColors.primary}
            fill={isFavorite ? tailwindColors.primary : 'transparent'}
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
  )
}

export default ProjectCard
