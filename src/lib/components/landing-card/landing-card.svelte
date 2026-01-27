<script lang="ts" module>
    export type LandingCardHighlight = {
        title: string,
        description: string,
    }

    export type LandingCardPlace = {
        id: string,
        lat: number,
        lng: number,
    }

    export type LandingCardContent = {
        id: string,
        title: string,
        description: string,
        skills: string[],
        highlights: LandingCardHighlight[],
        places: LandingCardPlace[],
    }
</script>

<script lang="ts">
	import Map from "../ui/map/Map.svelte";
	import MapMarker from "../ui/map/MapMarker.svelte";
	import MarkerContent from "../ui/map/MarkerContent.svelte";

    const { id, title, skills, description, highlights, places }: LandingCardContent = $props();
</script>

<div id={id} class="h-auto md:h-dvh flex items-center justify-center py-20">
    <div class="flex w-full max-w-4xl flex-col items-start gap-10 text-start flex-1 justify-center">
        <div class="flex flex-col items-start gap-3">
            <h1 class="text-5xl font-bold tracking-tight sm:text-6xl">{title}</h1>
            <div class="flex flex-row gap-3 flex-wrap">
                {#each skills as skill}
                    <span class="rounded-md bg-secondary/80 px-2.5 py-1 font-mono text-xs text-secondary-foreground">{skill}</span>
                {/each}
            </div>
        </div>
        <p class="text-md tracking-tight text-muted-foreground leading-relaxed">
            {description}
        </p>
        <div class="flex flex-col md:flex-row items-center gap-10 w-full">
            <div class="flex-1 w-full flex flex-col gap-8">
                {#each highlights as highlight}
                    <div class="rounded-lg bg-white/80 dark:bg-card/60">
                        <h2 class="text-base font-semibold">{highlight.title}</h2>
                        <p class="text-xs text-muted-foreground mt-2 leading-relaxed">
                            {highlight.description}
                        </p>
                    </div>
                {/each}
            </div>
            <div class="self-stretch w-full md:w-[350px] p-0 overflow-hidden rounded-lg">
                <Map center={[-15, 40]} zoom={-0.3} options={{interactive: false}}>
                    {#each places as place}
                        <MapMarker longitude={place.lng} latitude={place.lat}>
                            <MarkerContent>
                                <div
                                    class="size-4 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110"
                                ></div>
                            </MarkerContent>
                        </MapMarker>
                    {/each}
                </Map>
            </div>
        </div>
        
    </div>
</div>