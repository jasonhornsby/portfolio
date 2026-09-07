<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { ResolvedPathname } from '$app/types';
	import { ArrowLeft } from 'lucide-svelte';

	interface Props {
		title: string;
		description: string;
		children: Snippet;
		backlink?: ResolvedPathname;
	}

	let { title, description, children, backlink }: Props = $props();
</script>

<section class="flex min-h-dvh flex-col items-center gap-10 pt-[12vh] pb-24">
	<div class="relative flex w-full max-w-4xl flex-col items-start gap-3 text-start">
		{#if backlink}
			<a
				href={backlink}
				class="absolute -top-8 flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
			>
				<ArrowLeft class="size-4" />
				Back
			</a>
		{/if}
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
		<p class="text-base text-muted-foreground">
			{description}
		</p>
	</div>
	<div class="flex w-full max-w-4xl flex-col gap-8">
		{@render children()}
	</div>
</section>
