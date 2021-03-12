import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from 'remark-html'

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

export function getProjectIds() {
    const filenames = fs.readdirSync(projectsDirectory);
    return filenames.map((filename: string) => ({ params: { id: filename.replace(/\.md$/, '')}}) );
}

export async function getProjectData(id: string) {
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const parsed = matter(content);

    const processedContent = await remark().use(html).process(parsed.content);
    const contentHtml = processedContent.toString();

    return {
        id,
        contentHtml,
        ...parsed.data
    }
}