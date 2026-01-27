import type { LandingCardContent } from "$lib/components/landing-card/landing-card.svelte";

const dresden = {
    id: "dresden",
    lat: 51.04768312666119,
    lng: 13.799242368657875,
};

const paloAlto = {
    id: "palo-alto",
    lat: 37.41926429897054,
    lng: -122.13783497416357,
};

const jaipur = {
    id: "jaipur",
    lat: 26.8585177924985,
    lng: 75.80463485143416,
};

export const sections: LandingCardContent[] = [
    {
        title: "Full Stack Development",
        id: "full-stack-development",
        skills: ["Angular", "Python", "Typescript", "Web fundamentals", "System Architecture", "Python", "Golang"],
        description: `
                I deliver high-quality, scalable web applications using modern technologies and 
                frameworks. Specializing in translating complex mechanical engineering requirements 
                into robust cloud solutions.`,
        highlights: [
            {
                title: "Frontend Leadership",
                description:
                    "End-to-end frontend development—from initial design concepts through to production deployment and maintenance.",
            },
            {
                title: "Full Stack Solutions",
                description: "Custom web application development using Svelte, Node.js, and other modern frameworks tailored to your needs.",
            },
            {
                title: "Implementation Support",
                description:
                    "On-site rollout assistance and technical support to ensure smooth deployments and rapid issue resolution.",
            },
        ],
        places: [dresden, paloAlto, jaipur],
    },
    {
        title: "Product Development",
        id: "product-development",
        skills: ["Requirements Analysis", "Product Management", "Agile"],
        description: `
        I bridge the gap between technical teams and stakeholders, translating complex engineering requirements into actionable software features.
        `,
        highlights: [
            {
                title: "Technical Consulting",
                description: "Guide clients through the complete feature development process, from requirements gathering to rollout, providing technical feasibility analysis and strategic feedback.",
            },
            {
                title: "Feature Architecture",
                description: "Design and scope features from concept to implementation, ensuring technical feasibility while meeting client requirements and budget constraints.",
            },
            {
                title: "Product Strategy",
                description: "Develop comprehensive feature sets and functionality for new projects, from initial vision through to market-ready solutions.",
            }
        ],
        places: [paloAlto],
    },
    {
        title: "Team Leadership",
        id: "team-leadership",
        skills: ["Team Leadership", "Recruitment", "Mentoring", "Process Design", "Code Review", "Agile"],
        description: `
        I provide technical leadership services for engineering teams, covering everything from team building and process optimization to code quality standards and technical roadmapping.
        `,
        highlights: [
            {
                title: "Process Optimization",
                description: "Design and refine development processes to maximize efficiency and quality as your engineering team scales.",
            },
            {
                title: "Team Building & Mentoring",
                description: "Support hiring, onboarding, and mentorship programs to build high-performing engineering teams and ensure long-term success.",
            },
            {
                title: "Quality Assurance",
                description: "Establish code review processes and quality standards, along with knowledge-sharing workshops to elevate team capabilities and maintain consistency.",
            }
        ],
        places: [dresden, jaipur],
    },
];