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
                I build high quality, scalable products using a range of technologies and 
                frameworks in the web space. The majority of my career has been spent implementing
                highly specialised mechanical engineering requirements into cloud applications.`,
        highlights: [
            {
                title: "Frontend Lead",
                description:
                    "Lead the frontend team at SCALE GmbH—managed the entire development lifecycle from design to deployment.",
            },
            {
                title: "Fullstack Development",
                description: "Designed and shipped Svelte/Node applications for multiple projects (see Entreno.app, Tekka).",
            },
            {
                title: "Rollout Support",
                description:
                    "Provided on-site support for rollouts of SCALE GmbH's SDM system at RIVIAN automotive. Diagnosing and fixing issues before they impacted the end users",
            },
        ],
        places: [dresden, paloAlto, jaipur],
    },
    {
        title: "Product Development",
        id: "product-development",
        skills: ["Requirements Analysis", "Product Management", "Agile"],
        description: `
        I acted as the technical liasion between customers and our engineering team translating complex automotive engineering requirements into features of the SCALE.SDM software.
        `,
        highlights: [
            {
                title: "Technical Liaison",
                description: "Guided customers through the full feature development process, from requirement to rollout. Analysing technical feasibility and providing feedback to the engineering team.",
            },
            {
                title: "Feature Design",
                description: "Followed features from the initial idea to the final implementation, ensuring the features were technically feasible and met the customer's requirements and budget.",
            },
            {
                title: "Product Development",
                description: "Developed the features and functionality of greenfield projects, from initial idea to final implementation.",
            }
        ],
        places: [paloAlto],
    },
    {
        title: "Team Leadership",
        id: "team-leadership",
        skills: ["Team Leadership", "Recruitment", "Mentoring", "Process Design", "Code Review", "Agile"],
        description: `
        I led development teams across Germany and India, managing the full engineering lifecycle from hiring and onboarding to defining technical roadmaps and code quality standards.
        `,
        highlights: [
            {
                title: "Process development",
                description: "Continuously refined and improved development processes to increase efficiency and quality while scaling our engineering team.",
            },
            {
                title: "Team Building",
                description: "Interviewed, hired, and onboarded new engineers, ensuring they were productive and successful in their roles. Provided mentorship to ensure new colleagues were successful in their roles.",
            },
            {
                title: "Code Review",
                description: "Reviewed code changes to ensure quality and consistency, providing feedback to the team to improve code quality and maintainability. Organised internal workshops to share knowledge and best practices.",
            }
        ],
        places: [dresden, jaipur],
    },
];
