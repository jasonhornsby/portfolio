<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";
	import { toast } from "svelte-sonner";
	import { workExperience, projects, socialLinks, type SocialLink } from "$lib/data";

    async function handleClick(event: MouseEvent, link: SocialLink) {
        if (link.text) {
            try {
                await navigator.clipboard.writeText(link.text);
                toast.success(`${link.label} copied to clipboard`, {closeButton: true})
            } catch (err) {
                toast.error('Failed to copy to clipboard');
            }
        }
    }
</script>

<svelte:head>
	<title>Jason Hornsby - Senior Software Engineer</title>
	<meta name="description" content="Full-stack developer with 7+ years of experience building high quality, scalable products. Available for work in Melbourne, Australia." />
	<meta name="author" content="Jason Hornsby" />
	<meta name="theme-color" content="#000000" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Jason Hornsby - Senior Software Engineer" />
	<meta property="og:description" content="Full-stack developer with 7+ years of experience building high quality, scalable products. Available for work in Melbourne, Australia." />
	<meta property="og:url" content="https://jasonhornsby.com" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Jason Hornsby - Senior Software Engineer" />
	<meta name="twitter:description" content="Full-stack developer with 7+ years of experience building high quality, scalable products. Available for work in Melbourne, Australia." />
	
	<!-- Canonical URL -->
	<link rel="canonical" href="https://jasonhornsby.com" />
</svelte:head>

<main class="min-h-screen px-6 py-20 md:px-12 lg:px-24 flex flex-col gap-16">

    <header>
        <div class="flex flex-col md:flex-row md:items-end gap-3">
            <h1 class="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl mr-4">Jason Hornsby</h1>
            <div class="flex items-center gap-1.5 pb-1">
                <span class="relative flex h-3.5 w-3.5">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500"></span>
                </span>
                <span class="text-sm text-muted-foreground ml-1">Available for work</span>
            </div>
        </div>
        <h3 class="mt-3 text-xl font-medium text-primary">Senior Software Engineer</h3>
        <p class="mt-6 max-w-xl text-balance leading-relaxed text-muted-foreground">
            I'm a full-stack developer with a passion for building high quality, scalable products. With over 7+ years of experience, I've
            worked around the world, from Germany, through the US, India, and now hopefully in Melbourne, Australia.
        </p>

        <div class="mt-8 flex items-center gap-5 w-full flex-wrap">
            {#each socialLinks as link}
                <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={link.label} 
                    class="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary {link.text ? 'cursor-pointer' : ''}"
                    on:click={(e) => handleClick(e, link)}
                >
                    <link.icon class="h-5 w-5 shrink-0" />
                    {#if link.text}
                        <span class="whitespace-nowrap text-sm md:max-w-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-300 md:group-hover:max-w-xs md:group-hover:opacity-100">
                            {link.text}
                        </span>
                    {/if}
                </a>
            {/each}
        </div>
    </header>

    <section>
        <h2 class="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Work Experience and Roles
        </h2>

        <ul class="space-y-4">
            {#each workExperience as role, index}
                <li 
                    class="animate-in fade-in slide-in-from-bottom-4" 
                    style="animation-delay: {index * 100}ms; animation-fill-mode: backwards;"
                >
                    <article class="group relative block overflow-hidden rounded-xl border border-gray-200 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5">
                        <div class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        
                        <div class="relative">
                            <h3 class="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                                {role.title}
                            </h3>

                            <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{role.description}</p>

                            <div class="mt-4 flex flex-wrap gap-2">
                                {#each role.skills as skill}
                                    <span class="rounded-md bg-secondary/80 px-2.5 py-1 font-mono text-xs text-secondary-foreground">
                                        {skill}
                                    </span>
                                {/each}
                            </div>

                            <div class="mt-4 pt-4 border-t border-gray-200/60">
                                <p class="text-xs text-muted-foreground">
                                    <span class="font-medium text-foreground">{role.company}</span>
                                    <span class="mx-1.5">•</span>
                                    <span>{role.location}</span>
                                </p>
                            </div>
                        </div>
                    </article>
                </li>
            {/each}
        </ul>
    </section>

    <section>
        <h2 class="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Live Projects
        </h2>

        <ul class="space-y-4">
            {#each projects as project, index}
                <li 
                    class="animate-in fade-in slide-in-from-bottom-4" 
                    style="animation-delay: {index * 100}ms; animation-fill-mode: backwards;"
                >
                    <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        class="group relative block overflow-hidden rounded-xl border border-gray-200 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div class="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        
                        <div class="relative flex items-start justify-between gap-4">
                            <div class="flex-1">
                                <div class="flex items-center gap-2">
                                    <h3 class="font-semibold text-foreground transition-colors group-hover:text-primary">
                                        {project.name}
                                    </h3>
                                    <ArrowUpRight class="h-4 w-4 text-muted-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100" />
                                </div>
                                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                                <div class="mt-4 flex flex-wrap gap-2">
                                    {#each project.tech as tech}
                                        <span class="rounded-md bg-secondary/80 px-2.5 py-1 font-mono text-xs text-secondary-foreground">
                                            {tech}
                                        </span>
                                    {/each}
                                </div>
                                <div class="mt-4 md:hidden">
                                    <span class="inline-block rounded border border-blue-400/40 bg-blue-500/10 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-blue-600 backdrop-blur-sm">
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <span class="hidden md:block md:absolute md:top-0 md:right-0 rounded border border-blue-400/40 bg-blue-500/10 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-blue-600 backdrop-blur-sm">
                                {project.status}
                            </span>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    </section>

</main>


