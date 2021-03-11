import fs from 'fs'
import path from 'path'
import matter from  'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts');

export interface BlogData {
    id: string;
    title?: string;
    date?: string;
    contentHtml: string;
}

export function getSortedPostsData() {
    const filenames = fs.readdirSync(postsDirectory);
    let allPostsData = filenames.map((fileName: string) => {
        if (fileName === 'readme.md') {
            return null;
        }
        const id = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        
        const matterResult = matter(fileContents);

        return <BlogData>{
            id,
            ...matterResult.data
        }
    });

    allPostsData = allPostsData.filter(v => !!v);

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}

export function getAllPostIds() {
    const filenames = fs.readdirSync(postsDirectory);

    return filenames.map(fileName => ({
        params: {
            id: fileName.replace(/\.md$/, '')
        }
    }))
}

export async function getPostData(id): Promise<BlogData> {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

     // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
}