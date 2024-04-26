import Image from 'next/image'

import { Button } from '@/components/button'

type ProjectCardProps = {
  title: string
  image: string
  creator: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, creator, image }) => {
  return (
    <div className="card">
      <figure className="mb-4">
        <Image className="rounded-lg" src={image} alt={title} width={318} height={200} />
      </figure>
      <div className="card-body">
        <div>
          <p className="card-title">{title}</p>
          <p className="card-creator">{`By ${creator}`}</p>
        </div>
      </div>
      <div className="card-footer">
        <Button variant="primary" size="small">
          Apply
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard
