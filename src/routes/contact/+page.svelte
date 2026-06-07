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
	title="Get in touch"
	description="Open to new projects and collaborations."
>
	<div class="flex w-full max-w-4xl flex-col divide-y divide-border">
		<a
			href="https://cal.eu/jason-hornsby-pgqlpi/30min"
			target="_blank"
			rel="noopener noreferrer"
			class="py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
		>
			Schedule a meeting
		</a>
		<a
			href="mailto:jasonhornsby@proton.me"
			class="py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
		>
			jasonhornsby@proton.me
		</a>
		<a
			href="tel:+61478842412"
			class="py-4 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
		>
			+61 478 842 412
		</a>
		{#each socialLinks as link}
			<a href={link.href} target="_blank" rel="noopener noreferrer" class="py-4 inline-flex items-center gap-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors">
				<link.icon class="size-4" />
				{link.label}
			</a>
		{/each}
	</div>
</PageSection>
