export type ProjectData = {
    name: string;
    description: string;
    url: string | null;
    status: string;
    technologies: string[];
    startYear: number;
    endYear: number | null;
}

export const projectData: Record<string, ProjectData> = {
    'entreno': {
        name: 'Entreno',
        description: 'is a SASS platform empowering personal coaches organise their sessions, improve their service and attract more clients. Entreno takes over the paperwork so coaches can focus on delivering the best service possible.',
        url: 'https://entreno.app',
        status: 'In development',
        technologies: ['SvelteKit', 'TypeScript', 'Pocketbase', 'Tailwind CSS', 'Stripe', 'GenAI'],
        startYear: 2025,
        endYear: null,
    },
    'music-buddy': {
        name: 'Music Buddy',
        description: `is a waveform visualizer for music files. Written in Golang compiled to webassembly. The goal was to explore how computatationaly expensive computations can be run using webassembly.`,
        url: 'https://github.com/jasonhornsby/musicBuddy',
        status: 'Architecture completed, development paused',
        technologies: ['Golang', 'Webassembly', 'SvelteKit', 'TypeScript', 'Tailwind CSS'],
        startYear: 2025,
        endYear: 2026,
    },
    'tekka': {
        name: 'Tekka',
        description: `
        is a new social platform to organise pickup soccer games around Melbourne. 
        Finding people to share your passion with can be difficult. No matter if you are new in a city or a seasoned player. 
        Tekka's goal is to break down this barrier.
        `,
        url: 'https://playtekka.com',
        status: 'Prototype complete, irl testing in January 2026',
        technologies: ['SvelteKit', 'TypeScript', 'Pocketbase', 'Tailwind CSS'],
        startYear: 2025,
        endYear: null,
    },
    'gather-up': {
        name: 'Gather Up',
        description: 'was a web platform to organise student esports events with the goal of creating a Germany wide student esports league. The project shut down after a prototype was completed but we failed to secure funding.',
        url: null,
        status: 'Failed',
        technologies: ['Angular.js', 'Bootstrap', 'Python', 'Flask', 'MySQL'],
        startYear: 2016,
        endYear: 2017,
    }
}