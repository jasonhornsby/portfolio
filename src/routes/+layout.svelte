<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Toaster } from '$lib/components/ui/sonner';
	import Nav from '$lib/components/nav/nav.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />



<div class="min-h-dvh flex flex-col md:flex-row overflow-hidden max-h-dvh">
	<Nav />
	<main class="flex-1 min-h-dvh md:overflow-y-auto flex-col mx-4">
		{@render children()}
	</main>
</div>
