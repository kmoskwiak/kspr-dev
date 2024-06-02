import { styles } from './ProjectCard.css';
import { Card } from '../Card';
import { Header } from '../Header';
import { ProjectDetails } from '../ProjectDetails';

interface ProjectCardProps {
  name: string;
  projectId: string;
  description: string;
  website?: string;
  repository?: string;
  href?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ProjectCard = ({
  name,
  projectId,
  description,
  website,
  repository,
  href,
  ...props
}: ProjectCardProps) => {

  return (
    <div {...props} css={styles}>
      <Card>
        <ProjectDetails
          name={name}
          projectId={projectId}
          description={description}
          website={website}
          repository={repository}
          href={href}
        />
      </Card>
    </div>
  );
};
