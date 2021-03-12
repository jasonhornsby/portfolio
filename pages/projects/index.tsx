import FullScreenDarkLayout from "../../components/layouts/full-screen-dark";
import Stripedlayout from "../../components/layouts/striped";
import ProjectPreview from "../../components/project-preview";
import { getProjectsData } from "../../lib/projects";

export default function Projects({ projects }) {
  return (
    <FullScreenDarkLayout>
      <Stripedlayout color="dark">
        <div className="flex flex-col">
          <h1 className="mb-4">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
            {projects.map((project) => (
              <ProjectPreview
                id={project.id}
                categories={project.categories}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </Stripedlayout>
    </FullScreenDarkLayout>
  );
}

export async function getStaticProps() {
  const projects = getProjectsData();
  return {
    props: { projects },
  };
}
