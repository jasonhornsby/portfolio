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

<div id={id} class="h-auto md:h-dvh flex items-center justify-center py-20 border-t border-border">
    <div class="flex w-full max-w-4xl flex-col items-start gap-10 text-start flex-1 justify-center">
        <div class="flex flex-col items-start gap-4">
            <h2 class="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h2>
            <div class="flex flex-row gap-2 flex-wrap">
                {#each skills as skill}
                    <span class="border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground">{skill}</span>
                {/each}
            </div>
        </div>
        <p class="text-base text-muted-foreground leading-relaxed max-w-xl">
            {description}
        </p>
        <div class="flex flex-col md:flex-row items-start gap-10 w-full">
            <div class="flex-1 w-full flex flex-col divide-y divide-border">
                {#each highlights as highlight}
                    <div class="py-5">
                        <h3 class="font-medium text-base">{highlight.title}</h3>
                        <p class="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                            {highlight.description}
                        </p>
                    </div>
                {/each}
            </div>
            <div class="self-stretch w-full md:w-[320px] overflow-hidden rounded-sm">
                <Map center={[-15, 40]} zoom={-0.3} options={{interactive: false}}>
                    {#each places as place}
                        <MapMarker longitude={place.lng} latitude={place.lat}>
                            <MarkerContent>
                                <div
                                    class="size-3 rounded-full border border-white bg-foreground shadow-sm"
                                ></div>
                            </MarkerContent>
                        </MapMarker>
                    {/each}
                </Map>
            </div>
        </div>
    </div>
</div>