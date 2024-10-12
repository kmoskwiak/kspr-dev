import { useTheme } from '@emotion/react';
import { Card } from '../Card';
import { ProjectDetails } from '../ProjectDetails';
import { styles } from './ProjectCard.css';

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
  const theme = useTheme();
  return (
    <div {...props} css={styles(theme)}>
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
