<script lang="ts" module>
    export type ProjectCardProps = {
        slug: string;
        name: string;
        description: string;
    }
</script>


<script lang="ts">
    const { slug, name, description }: ProjectCardProps = $props();
</script>

<a href={`/projects/${slug}`}>
    <div class="rounded-lg hover:text-muted-foreground transition-colors text-primary">
        <h3 class="text-2xl font-bold tracking-tight">{name}</h3>
        <p class="text-muted-foreground text-sm">{description}</p>
    </div>
</a>
