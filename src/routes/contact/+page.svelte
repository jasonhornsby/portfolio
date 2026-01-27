<script lang="ts">
	import { PageSection } from '$lib/components/page-section';
	import { Github, Linkedin } from 'lucide-svelte';

	const socialLinks = [
		{
			href: 'https://github.com/jasonhornsby',
			label: 'GitHub',
			icon: Github,
		},
		{
			href: 'https://linkedin.com/in/jason-hornsby-541b13195/',
			label: 'LinkedIn',
			icon: Linkedin,
		},
	]
</script>

<PageSection
	title="Let's work together"
	description="Ready to start a project or just want to say hi? Pick the option that works best for you."
>
	<div class="flex w-full max-w-4xl flex-col gap-4">
		<div class="flex flex-col gap-3">
			<a
				href="https://cal.eu/jason-hornsby-pgqlpi/30min"
				target="_blank"
				rel="noopener noreferrer"
				class="text-2xl font-bold tracking-tight text-muted-foreground hover:text-primary sm:text-3xl"
			>
				Schedule a meeting
			</a>
			<a
				href="mailto:jasonhornsby@proton.me"
				class="text-2xl font-bold tracking-tight text-muted-foreground hover:text-primary sm:text-3xl"
			>
				Email me
			</a>
			<a
				href="tel:+61478842412"
				class="text-2xl font-bold tracking-tight text-muted-foreground hover:text-primary sm:text-3xl"
			>
				Call me
			</a>
		</div>

		<h2 class="text-2xl font-bold tracking-tight sm:text-2xl my-4">Or find me on...</h2>
		<div class="flex flex-col gap-3">
			{#each socialLinks as link}
				<a href={link.href} target="_blank" rel="noopener noreferrer" class="text-2xl inline-flex items-center gap-4 font-bold tracking-tight text-muted-foreground hover:text-primary sm:text-3xl">
					<link.icon class="size-6" />
					{link.label}
				</a>
			{/each}
		</div>
	</div>
</PageSection>
