<script lang="ts">
	import LandingCard from "$lib/components/landing-card/landing-card.svelte";
	import { sections } from "$lib/data/services";

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
    <div class="flex w-full max-w-4xl flex-col items-start gap-6 text-start flex-1 justify-center">
        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, I’m Jason
        </h1>
        <p class="text-base text-muted-foreground sm:text-lg max-w-xl leading-relaxed">
            Full-stack developer with 7+ years of experience building high-quality,
            scalable products across Germany, the US, India, and Australia.
        </p>
        <a href="/contact" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Get in touch
        </a>
    </div>
</section>

{#each sections as section}
    <LandingCard {...section} />
{/each}

<section class="flex items-center justify-center pt-16 pb-32">
	<div class="flex w-full max-w-4xl flex-col items-start gap-3 text-start">
		<h2 class="text-2xl font-bold tracking-tight">Ready to build?</h2>
		<a href="/contact" class="text-base text-muted-foreground hover:text-foreground transition-colors">
			Get in touch
		</a>
	</div>
</section>

