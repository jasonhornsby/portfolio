<script lang="ts">
	const pageTitle = "Jason Hornsby | Full Stack Engineer";
	const metaDescription =
		"Full-stack engineer with 7+ years of experience building high-quality, scalable products across Germany, the US, India, and Australia.";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta name="robots" content="index,follow" />
	<meta name="author" content="Jason Hornsby" />

	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={metaDescription} />
</svelte:head>

<section class="flex min-h-dvh items-center justify-center flex-col" id="home">
    <div class="flex w-full max-w-4xl flex-col items-start gap-6 text-start flex-1 justify-center">
        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, I’m Jason
        </h1>
        <p class="text-base text-muted-foreground sm:text-lg max-w-xl leading-relaxed">
            Full-stack engineer with 7+ years of experience building high-quality,
            scalable products across Germany, the US, India, and Australia.
        </p>
        <a href="/contact" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Get in touch
        </a>
    </div>
</section>
