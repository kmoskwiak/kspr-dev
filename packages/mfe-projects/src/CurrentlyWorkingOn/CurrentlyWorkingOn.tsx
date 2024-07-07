import { ProjectCard } from "@kspr-dev/common/components/ProjectCard";
import { ConicGradient } from "@kspr-dev/common/components/ConicGradient";
import { Container } from "@kspr-dev/common/components/Container";
import { Header } from "@kspr-dev/common/components/Header";
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
    <>
      <Container marginTop="2rem">
        <Header font="sans-serif">
          Currently working on
        </Header>
      </Container>
      <div css={style}>

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
      </div>
    </>
  );
};
