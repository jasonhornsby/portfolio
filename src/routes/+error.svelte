<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	onMount(() => {
		toast.info('Could not find that page. Back home we go!');
		goto(resolve('/'));
	});
</script>
