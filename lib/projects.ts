import fs from "fs";
import path from "path";
import matter from "gray-matter";

const projectsDirectory = path.join(process.cwd(), 'data/projects');

export function getProjectsData() {
    const filenames = fs.readdirSync(projectsDirectory);

    let allProjects = filenames.map((filename: string) => {
        const id = filename.replace(/\.md$/, '');

        const fullPath = path.join(projectsDirectory, filename);
        const content = fs.readFileSync(fullPath, 'utf8');

        const parsed = matter(content);
        return {
            id, 
            ...parsed.data
        };
    });

    return allProjects;
}