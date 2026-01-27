<script lang="ts">
	import PageSection from "$lib/components/page-section/page-section.svelte";
	import { ExternalLink } from 'lucide-svelte';
    const { data } = $props();
</script>

<PageSection title={data.project.name} description={data.project.description} backlink={'/projects'}>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
            <span class="text-sm text-muted-foreground">Status</span>
            <span class="text-lg font-bold">{data.project.status}</span>
        </div>
        <div class="flex flex-col gap-2">
            <span class="text-sm text-muted-foreground">Technologies</span>
            <span class="text-lg font-bold">{data.project.technologies.join(', ')}</span>
        </div>
        <div class="flex flex-col gap-2">
            <span class="text-sm text-muted-foreground">Time Period</span>
            <span class="text-lg font-bold">
                {data.project.startYear} – {data.project.endYear ?? 'Present'}
            </span>
        </div>
    </div>
    {#if data.project.url}
        <div class="flex flex-col gap-3 items-end mt-4">
            <a
                href={data.project.url}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-xl font-bold tracking-tight text-primary hover:text-primary/80 sm:text-2xl"
            >
            <ExternalLink class="size-5 sm:size-6" />
            Visit {data.project.name}
            </a>
        </div>
    {/if}
</PageSection>