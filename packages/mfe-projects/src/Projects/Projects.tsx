import { Container } from "@kspr-dev/common/components/Container";
import { ProjectDetails } from "@kspr-dev/common/components/ProjectDetails";
import { useSSE } from "@kspr-dev/use-sse";
import axios from "axios";
import { style } from "./Projects.css";

const API = "https://cms.kspr.dev/items/Project";

type ProjectItem = {
  name: string,
  description: string,
  projectId: string,
  sort?: number,
  repository: string,
  website: string
}

type ProjectResponse = {
  data:  ProjectItem[]
}

export const Projects = () => {

  const [data] = useSSE<ProjectItem[]>(() => {
    return axios
      .get<ProjectResponse>(API)
      .then((res) => res.data?.data?.map(projectItem => ({
        name: projectItem.name,
        projectId: ('0' + projectItem.sort.toString()).slice(-2),
        description: projectItem.description,
        repository: projectItem.repository,
        website: projectItem.website
      })) || []);
  }, []);


  return (
    <div css={style}>
      <Container marginTop="6rem">
        {
          data && data.map(({
            name,
            projectId,
            description,
            website,
            repository
          }) => (
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
