import { ProjectCard } from "@kspr-dev/common/components/ProjectCard";
import { Container } from "@kspr-dev/common/components/Container";
import { ConicGradient } from "@kspr-dev/common/components/ConicGradient"
import { style } from "./CurrentlyWorkingOn.css";

export const Projects = () => {

  const projects = [
    {
      name: 'useSSE',
      projectId: '01',
      description: 'use Server-Side Effect in React SSR app',
      website: "https://kspr.dev/use-sse/",
      repository: "https://github.com/kmoskwiak/useSSE"
    },
    {
      name: 'muchconf',
      projectId: '02',
      description: 'Wow! So much configuration, so many sources!',
      repository: "https://github.com/kmoskwiak/muchconf"
    }
  ];


  return (
    <div css={style}>
      <Container marginTop="6rem" display="grid" zIndex="40">
        {
          projects.map(({
            name,
            projectId,
            description,
            website,
            repository
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
                  website={website}
                  repository={repository}
                />
              </div>
            </div>
          ))
        }
      </Container>
    </div>
  );
};
