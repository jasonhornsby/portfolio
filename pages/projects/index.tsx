import FullScreenDarkLayout from "../../components/layouts/full-screen-dark";
import Stripedlayout from "../../components/layouts/striped";
import ProjectPreview from "../../components/project-preview";
import { getProjectsData } from "../../lib/projects";

export default function Projects({ projects }) {
  console.log(projects);
  return (
    <FullScreenDarkLayout>
      <Stripedlayout color="dark">
        <div className="flex flex-col mt-4 w-full">
          {projects.map((project) => (
            <ProjectPreview
              categories={project.categories}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
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
