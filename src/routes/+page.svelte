<script lang="ts">
	import LandingCard from "$lib/components/landing-card/landing-card.svelte";
	import Button from "$lib/components/ui/button/button.svelte";
	import { sections } from "./sections";

	const sectionTitles = sections.map((section) => section.title);
	const sectionSkills = sections.flatMap((section) => section.skills);
	const uniqueSectionSkills = [...new Set(sectionSkills)];
	const pageTitle = "Jason Hornsby | Full Stack Developer";
	const metaDescription = `Full stack developer focused on ${sectionTitles.join(
		", ",
	)}. Experience across ${sectionSkills.join(", ")}.`;
	const metaKeywords = [...new Set([...sectionTitles, ...sectionSkills])].join(", ");
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta name="keywords" content={metaKeywords} />
	<meta name="robots" content="index,follow" />
	<meta name="author" content="Jason Hornsby" />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={metaDescription} />

	{#each sectionTitles as sectionTitle}
		<meta property="article:section" content={sectionTitle} />
	{/each}
	{#each uniqueSectionSkills as sectionSkill}
		<meta property="article:tag" content={sectionSkill} />
	{/each}
</svelte:head>

<section class="flex min-h-dvh items-center justify-center flex-col" id="home">
    <div class="flex w-full max-w-4xl flex-col items-start gap-8 text-start flex-1 justify-center">
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

        <div class="flex flex-col gap-2">
            <h2 class="text-xl font-bold tracking-tight sm:text-3xl">Let's work together...</h2>
			<div class="flex flex-col gap-2">
				<a href="https://cal.eu/jason-hornsby-pgqlpi/30min" target="_blank" rel="noopener noreferrer" class="text-lg text-muted-foreground sm:text-xl hover:text-primary font-bold">
					Schedule a meeting
				</a>
				<a href="mailto:jasonhornsby@proton.me" class="text-lg text-muted-foreground sm:text-xl hover:text-primary font-bold">
					Email me
				</a>
				<a href="tel:+61478842412" class="text-lg text-muted-foreground sm:text-xl hover:text-primary font-bold">
					Call me
				</a>
			</div>
        </div>
    </div>
    
</section>

{#each sections as section}
    <LandingCard {...section} />
{/each}

