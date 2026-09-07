<script lang="ts">
	import { resolve } from '$app/paths';

	const pageTitle = 'Jason Hornsby | Full Stack Engineer';
	const metaDescription =
		'Full-stack engineer with 7+ years of experience building high-quality, scalable products across Germany, the US, India, and Australia.';
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

<section class="flex min-h-dvh flex-col items-center justify-center" id="home">
	<div class="flex w-full max-w-4xl flex-1 flex-col items-start justify-center gap-6 text-start">
		<h1 class="text-5xl font-bold tracking-tight sm:text-6xl">Hi, I’m Jason</h1>
		<p class="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
			Full-stack engineer with 7+ years of experience building high-quality, scalable products
			across Germany, the US, India, and Australia.
		</p>
		<a
			href={resolve('/contact')}
			class="text-sm text-muted-foreground transition-colors hover:text-foreground"
		>
			Get in touch
		</a>
	</div>
</section>
