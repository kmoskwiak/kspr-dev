import { styles } from './ProjectCard.css';
import { Card } from '../Card';
import { Header } from '../Header';

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
        <div className='container'>
          <div className="counter">{projectId}</div>
          <div className='content'>
            <div className="details">
              <Header>{name}</Header>
              <div className="description">{description}</div>
              <div className="links">
                {website && (
                  <a className="project-link" href={website}>
                    Project website
                  </a>
                )}
                {repository && (
                  <a className="project-link" href={repository}>
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
