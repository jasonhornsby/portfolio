<script lang="ts">
	import LandingCard, { type LandingCardContent } from "$lib/components/landing-card/landing-card.svelte";

    const sections: LandingCardContent[] = [
        {
            title: 'Full Stack Development',
            id: 'full-stack-development',
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
            places: [
                {
                    id: "dresden",
                    lat: 51.04768312666119,
                    lng: 13.799242368657875,
                },
                {
                    id: "palo-alto",
                    lat: 37.41926429897054,
                    lng: -122.13783497416357,
                },
                {
                    id: "jaipur",
                    lat: 26.8585177924985,
                    lng: 75.80463485143416,
                },
            ],
        },
        {
            title: 'Product Development',
            id: 'product-development',
            skills: [],
            description: "",
            highlights: [],
            places: [],
        },
        {
            title: 'Team Leadership',
            id: 'team-leadership',
            skills: [],
            description: "",
            highlights: [],
            places: [],
        }
    ]
</script>

<section class="flex min-h-dvh items-center justify-center flex-col" id="home">
    <div class="flex w-full max-w-3xl flex-col items-start gap-8 text-start flex-1 justify-center">
        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm Jason
        </h1>
        <p class="text-lg text-muted-foreground sm:text-xl">
            I'm a full-stack developer with a passion for building high quality,
            scalable products. With over 7+ years of experience, I've worked
            around the world, from Germany, through the US, India, and now Australia.
        </p>
        
        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold tracking-tight sm:text-3xl">I do...</h2>
            {#each sections as section, i}
                <a href={`#${section.id}`} class="text-lg text-muted-foreground sm:text-xl hover:text-primary font-bold">
                    {section.title}
                </a>
            {/each}
        </div>

        <div>
            <h2 class="text-xl font-bold tracking-tight sm:text-3xl">Let's work together</h2>
        </div>
    </div>
    
</section>

{#each sections as section}
    <LandingCard {...section} />
{/each}

