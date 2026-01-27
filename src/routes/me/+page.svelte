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

<section class="flex min-h-dvh items-center justify-center py-16 md:py-0">
	<div class="flex w-full max-w-4xl flex-col items-start gap-16 text-start">
		
		<!-- Hero Section -->
		<div class="flex flex-col gap-6 w-full">
			<h1 class="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
				I'm Jason.
			</h1>
		</div>

		<!-- Main Content -->
		<div class="flex flex-col md:flex-row items-start gap-12 md:gap-16 w-full">
			
			<!-- Headshot -->
			<div class="shrink-0">
				<img 
					src="/headshot.png" 
					alt="Jason Hornsby" 
					class="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover object-top"
				/>
			</div>

			<!-- Bio Content -->
			<div class="flex flex-col gap-8 flex-1">
				<div class="flex flex-col gap-4">
					<h2 class="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl leading-snug">
						I'm a Full Stack Developer working remotely from Melbourne, Australia.
					</h2>
				</div>

				<div class="flex flex-col gap-6">
					<p class="text-base text-muted-foreground leading-relaxed">
						Over the past 7+ years, I've worked in various areas of software development, 
						including front-end, back-end, cloud infrastructure, and mobile applications. 
						I'm proud to have worn many hats.
					</p>

					<p class="text-base text-muted-foreground leading-relaxed">
						I've built products across the globe—from Germany, through the US, India, 
						and now Australia—always focused on creating high quality, scalable solutions 
						that make a real impact.
					</p>
				</div>
			</div>
		</div>

		<!-- Skills & Experience Section -->
		<div class="flex flex-col gap-12 w-full">
			
			<!-- What I Do -->
			<div class="flex flex-col gap-6">
				<h3 class="text-xl font-bold tracking-tight sm:text-2xl">
					What I Do
				</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div class="flex flex-col gap-2">
						<h4 class="font-semibold">Front-End Development</h4>
						<p class="text-sm text-muted-foreground leading-relaxed">
							Building responsive, performant interfaces with React, Svelte, and modern web technologies.
						</p>
					</div>
					<div class="flex flex-col gap-2">
						<h4 class="font-semibold">Back-End Development</h4>
						<p class="text-sm text-muted-foreground leading-relaxed">
							Designing robust APIs and services with Node.js, Python, and cloud-native architectures.
						</p>
					</div>
					<div class="flex flex-col gap-2">
						<h4 class="font-semibold">Cloud & Infrastructure</h4>
						<p class="text-sm text-muted-foreground leading-relaxed">
							Deploying and scaling applications on AWS, GCP, and containerized environments.
						</p>
					</div>
					<div class="flex flex-col gap-2">
						<h4 class="font-semibold">Technical Leadership</h4>
						<p class="text-sm text-muted-foreground leading-relaxed">
							Mentoring teams, architecting solutions, and driving technical strategy.
						</p>
					</div>
				</div>
			</div>

			<!-- Values -->
			<div class="flex flex-col gap-6">
				<h3 class="text-xl font-bold tracking-tight sm:text-2xl">
					How I Work
				</h3>
				<div class="flex flex-col gap-4">
					<p class="text-base text-muted-foreground leading-relaxed">
						I believe in writing clean, maintainable code that stands the test of time. 
						I care deeply about user experience and performance—not just making things work, 
						but making them work well.
					</p>
					<p class="text-base text-muted-foreground leading-relaxed">
						I'm always learning, always iterating, and always looking for ways to improve. 
						Whether it's a greenfield project or an existing codebase, I bring the same 
						attention to detail and commitment to quality.
					</p>
				</div>
			</div>
		</div>

		<!-- CTA -->
		<div class="flex flex-col gap-4 w-full pt-4">
			<h3 class="text-xl font-bold tracking-tight sm:text-2xl">
				Let's Connect
			</h3>
			<div class="flex flex-col gap-2">
				<a 
					href="https://cal.eu/jason-hornsby-pgqlpi/30min" 
					target="_blank" 
					rel="noopener noreferrer" 
					class="text-base text-muted-foreground hover:text-primary font-medium transition-colors"
				>
					Schedule a meeting
				</a>
				<a 
					href="mailto:jasonhornsby@proton.me" 
					class="text-base text-muted-foreground hover:text-primary font-medium transition-colors"
				>
					jasonhornsby@proton.me
				</a>
				<a 
					href="tel:+61478842412" 
					class="text-base text-muted-foreground hover:text-primary font-medium transition-colors"
				>
					+61 478 842 412
				</a>
			</div>
		</div>

	</div>
</section>
