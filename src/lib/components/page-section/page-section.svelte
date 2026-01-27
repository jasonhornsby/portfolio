<script lang="ts">
	import type { Snippet } from 'svelte';
	import { ArrowLeft } from 'lucide-svelte';

	interface Props {
		title: string;
		description: string;
		children: Snippet;
		backlink?: string;
	}

	let { title, description, children, backlink }: Props = $props();
</script>

<section class="flex flex-col items-center min-h-dvh gap-8 pt-[10vh] sm:pt-[25vh] pb-[100px]">
	<div class="relative flex w-full flex-col items-start gap-4 text-start max-w-4xl">
		{#if backlink}
			<a href={backlink} class="absolute -top-8 flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
				<ArrowLeft class="size-4" />
				Back
			</a>
		{/if}
		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
		<p class="text-lg text-muted-foreground sm:text-xl">
			{description}
		</p>
	</div>
	<div class="w-full max-w-4xl flex flex-col gap-12">
		{@render children()}
	</div>
</section>
