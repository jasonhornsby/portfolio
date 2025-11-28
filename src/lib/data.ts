import { Github, Linkedin, Mail, Phone } from "lucide-svelte";
import type { ComponentType } from "svelte";

export interface WorkExperience {
    title: string;
    description: string;
    skills: string[];
    company: string;
    location: string;
}

export interface Project {
    name: string;
    description: string;
    url: string;
    tech: string[];
    status: string;
}

export interface SocialLink {
    href: string;
    label: string;
    icon: ComponentType;
    text?: string;
}

export const workExperience: WorkExperience[] = [
    {
        "title": "Engineering Lead & Team Builder",
        "description": "Led development teams across Germany and India, managing the full engineering lifecycle from hiring and onboarding to defining technical roadmaps and code quality standards.",
        "skills": [
            "Team Leadership",
            "Recruitment",
            "Mentoring",
            "Process Design",
            "Code Review",
            "Agile"
        ],
        "company": "SCALE GmbH / SCALEsdm India PLC",
        "location": "Dresden, Germany / Jaipur, India"
    },
    {
        "title": "Senior Full Stack Architect",
        "description": "Engineered the architecture for Cloud SDM solutions designed to handle massive simulation datasets where performance was critical. Managed legacy cloud migrations, optimized API layers (REST to GraphQL), and implemented modern testing suites.",
        "skills": [
            "Angular",
            "Python",
            "GraphQL",
            "Performance Optimization",
            "System Architecture",
            "Cloud Migration"
        ],
        "company": "SCALE GmbH",
        "location": "Dresden, Germany"
    },
    {
        "title": "Technical Solutions Liaison",
        "description": "Acted as the bridge between engineering teams and major automotive clients (Rivian, VW), translating complex business requirements into technical implementations and managing on-site rollouts.",
        "skills": [
            "Requirements Analysis",
            "Stakeholder Management",
            "Solution Design",
            "Client Relations",
            "Technical Feasibility"
        ],
        "company": "DYNAmore Corporation / SCALE GmbH",
        "location": "Palo Alto, USA / Dresden, Germany"
    },
    {
        "title": "Founder & Product Developer",
        "description": "Built multiple software ventures from scratch, handling everything from business planning and investor pitching to full-stack coding and server infrastructure management.",
        "skills": [
            "Svelte/SvelteKit",
            "Go-to-Market Strategy",
            "VPS/DevOps",
            "Prototyping",
            "Business Development"
        ],
        "company": "Entreno.app / Tekka / GatherUp",
        "location": "Hamburg, Germany / Asia"
    }
];

export const projects: Project[] = [
    {
        name: 'Tekka',
        description: 'Social platform to organise pickup soccer games around Melbourne',
        url: 'https://playtekka.com',
        tech: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'Pocketbase', 'Caddy'],
        status: 'Prototype complete, irl testing in January 2026',
    },
    {
        name: 'Entreno',
        description: 'SASS platform empowering personal coaches organise their sessions, improve their service and attract more clients',
        url: 'https://entreno.app',
        tech: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'Pocketbase', 'Caddy'],
        status: 'In development',
    }
];

export const socialLinks: SocialLink[] = [
    {
        href: 'https://github.com/jasonhornsby',
        label: 'GitHub',
        icon: Github,
    },
    {
        href: 'https://linkedin.com/in/jason-hornsby-541b13195/',
        label: 'LinkedIn',
        icon: Linkedin,
    },
    {
        href: 'mailto:jasonhornsby@proton.me',
        label: 'Email',
        icon: Mail,
        text: 'jasonhornsby@proton.me',
    },
    {
        href: 'tel:+61478842412',
        label: 'Phone',
        icon: Phone,
        text: '+61 478 842 412',
    }
];

