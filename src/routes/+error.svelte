<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { toast } from "svelte-sonner";

    onMount(() => {
        toast.info('Could not find that page. Back home we go!')
        goto('/')
    })
</script>