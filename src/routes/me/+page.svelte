<script lang="ts">
	const pageTitle = "About Me | Jason Hornsby";
	const metaDescription = "Full stack developer with 7+ years of experience building scalable products across the globe.";
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metaDescription} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metaDescription} />
</svelte:head>

<section class="flex flex-col items-center min-h-dvh pt-[12vh] pb-24">
	<div class="flex w-full max-w-4xl flex-col items-start gap-12 text-start">

		<!-- Hero Section -->
		<div class="flex flex-col gap-3 w-full">
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
				I'm Jason.
			</h1>
		</div>

		<!-- Bio Content -->
		<div class="flex flex-col gap-6 max-w-xl">
			<h2 class="text-xl font-medium text-muted-foreground leading-relaxed">
				Full Stack Developer working remotely from Melbourne, Australia.
			</h2>
			<p class="text-base text-muted-foreground leading-relaxed">
				Over the past 7+ years, I've worked across front-end, back-end, cloud infrastructure,
				and mobile applications — building products from Germany, through the US, India,
				and now Australia.
			</p>
		</div>

		<!-- Skills -->
		<div class="flex flex-col divide-y divide-border w-full max-w-xl">
			{#each [
				{ title: 'Front-End', desc: 'React, Svelte, and modern web technologies.' },
				{ title: 'Back-End', desc: 'Node.js, Python, and cloud-native architectures.' },
				{ title: 'Infrastructure', desc: 'AWS, GCP, and containerized environments.' },
				{ title: 'Leadership', desc: 'Mentoring teams and driving technical strategy.' },
			] as item}
				<div class="py-4 flex flex-row items-baseline gap-6">
					<span class="text-sm font-medium w-32 shrink-0">{item.title}</span>
					<span class="text-sm text-muted-foreground">{item.desc}</span>
				</div>
			{/each}
		</div>

		<!-- CTA -->
		<div class="flex flex-col gap-2 w-full pt-4 border-t border-border">
			<a
				href="/contact"
				class="text-sm text-muted-foreground hover:text-foreground transition-colors"
			>
				Get in touch
			</a>
		</div>

	</div>
</section>
