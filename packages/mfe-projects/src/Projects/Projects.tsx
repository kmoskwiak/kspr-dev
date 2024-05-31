import { ProjectCard } from "@kspr-dev/common/components/ProjectCard";
import { Container } from "@kspr-dev/common/components/Container";
import { ConicGradient } from "@kspr-dev/common/components/ConicGradient"
import { style } from "./Projects.css";

export const Projects = () => {

  const projects = [
    {
      name: 'useSSE',
      projectId: '01',
      description: 'use Server-Side Effect in React SSR app'
    },
    {
      name: 'muchconf',
      projectId: '02',
      description: 'Wow! So much configuration, so many sources!'
    }
  ];


  return (
    <div css={style}>
      <Container marginTop="6rem" display="grid" zIndex="40">
        {
          projects.map(({
            name,
            projectId,
            description
          }, index) => (
            <div key={projectId} className="container">
              {
                index === 0 && (
                  <div className="gradient-container">
                    <ConicGradient />
                  </div>
                )
              }

              <div className="project-card-container">
                <ProjectCard
                  name={name}
                  projectId={projectId}
                  description={description}
                />
              </div>
            </div>
          ))
        }
      </Container>
    </div>
  );
};
