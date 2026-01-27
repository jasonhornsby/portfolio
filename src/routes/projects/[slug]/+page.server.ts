import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { projectData } from "./project-data";

export const load: PageServerLoad = async event => {
    const { params } = event;
    const { slug } = params;

    if (!projectData[slug]) {
        return error(404, 'Project not found');
    }

    return {
        project: projectData[slug],
    }
}