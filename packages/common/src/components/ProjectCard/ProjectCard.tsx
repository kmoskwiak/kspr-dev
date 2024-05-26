import React from 'react';
import { styles } from './ProjectCard.css';
import { Card } from '../Card';
import { Header } from '../Header';

interface ProjectCardProps {
  /**
   * Children of the card
   */
  children: React.ReactNode;
  name: string;
  id: string;
  description: string;
  website?: string;
  repository?: string;
  href?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ProjectCard = ({
  children,
  name,
  id,
  description,
  website,
  repository,
  href,
  ...props
}: ProjectCardProps) => {

  return (
    <a {...props} href={href} css={styles}>
      <Card>
        <div className='container'>
          <div className="counter">{id}</div>
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
    </a>
  );
};
