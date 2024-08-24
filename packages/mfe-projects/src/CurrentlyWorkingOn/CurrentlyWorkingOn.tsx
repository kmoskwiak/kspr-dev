import { ConicGradient } from "@kspr-dev/common/components/ConicGradient";
import { Container } from "@kspr-dev/common/components/Container";
import { Header } from "@kspr-dev/common/components/Header";
import { ProjectCard } from "@kspr-dev/common/components/ProjectCard";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";
import { style } from "./CurrentlyWorkingOn.css";

const API = "https://cms.kspr.dev/items/CurrentlyWorkinOn";

type ProjectItem = {
  name: string,
  description: string,
  projectId: string,
  repository: string,
  website: string
}

type ProjectResponse = {
  data:  { items: ProjectItem[] }
}

export const Projects = () => {
  const [projects] = useSSE<ProjectItem[]>(() => {
    return axios
      .get<ProjectResponse>(API)
      .then((res) => res.data?.data?.items?.map((projectItem, index) => ({
        name: projectItem.name,
        projectId: ('0' + index.toString()).slice(-2),
        description: projectItem.description,
        repository: projectItem.repository,
        website: projectItem.website
      })) || []);
  }, []);

  return (
    <>
      <Container marginTop="2rem">
        <Header font="sans-serif">
          Currently working on
        </Header>
      </Container>
      <div css={style}>

        {
          projects && projects.map(({
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
