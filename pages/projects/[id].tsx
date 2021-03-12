import Stripedlayout from "../../components/layouts/striped";
import { getProjectIds, getProjectData } from "../../lib/projects";

export default function ProjectSingleView({ projectData }) {
  return (
    <Stripedlayout color="light">
      <div className="flex flex-col">
        <h1>{projectData.title}</h1>
        <p className="py-4">{projectData.description}</p>
        <div className="flex flex-row py-2">
          {projectData.categories.map((name) => (
            <span className="px-2 py-1 mr-2 rounded-lg text-sm bg-gray-300">
              {name}
            </span>
          ))}
        </div>
        <section
          className="renderedHtml mt-2 pr-2"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        ></section>
      </div>
    </Stripedlayout>
  );
}

export async function getStaticPaths() {
  const paths = getProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);

  return {
    props: {
      projectData,
    },
  };
}
