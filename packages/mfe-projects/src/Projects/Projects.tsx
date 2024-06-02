import { ProjectDetails } from "@kspr-dev/common/components/ProjectDetails";
import { Container } from "@kspr-dev/common/components/Container";
import { ConicGradient } from "@kspr-dev/common/components/ConicGradient"
import { style } from "./Projects.css";
import projectsData from './data.json';

export const Projects = () => {

  const projects = projectsData.map((project, index) => ({
    name: project.name,
    projectId: index.toString(),
    description: project.description,
    repository: project.html_url,
    website: project.homepage
  })
  );

  return (
    <div css={style}>
      <Container marginTop="6rem">
        {
          projects.map(({
            name,
            projectId,
            description,
            website,
            repository
          }, index) => (
            <div key={projectId} className="container">
              <div className="project-card-container">
                <ProjectDetails
                  name={name}
                  projectId={projectId}
                  description={description}
                  repository={repository}
                  website={website}
                />
              </div>
            </div>
          ))
        }
      </Container>
    </div>
  );
};
