<script lang="ts">
    const sections = [
        {
            title: 'Full Stack Development',
        },
        {
            title: 'Team Leadership',
        },
        {
            title: 'Product Development',
        }
    ]
</script>

<section class="flex min-h-dvh items-center justify-center flex-col">
    <div class="flex w-full max-w-3xl flex-col items-start gap-6 text-start flex-1 justify-center">
        <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm Jason
        </h1>
        <p class="text-lg text-muted-foreground sm:text-xl">
            I'm a full-stack developer with a passion for building high quality,
            scalable products. With over 7+ years of experience, I've worked
            around the world, from Germany, through the US, India, and now Australia.
        </p>
        <div class="grid grid-cols-3 gap-4 w-full pb-8 max-w-3xl mt-8">
            {#each sections as section}
                <div class="border rounded-2xl p-4 aspect-square">
                    {section.title}
                </div>
            {/each}
        </div>
    </div>
    
</section>


