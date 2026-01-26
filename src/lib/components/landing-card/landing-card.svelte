<script lang="ts" module>
    export type LandingCardContent = {
        id: string,
        title: string,
        description: string,
        skills: string[],
    }
</script>

<script lang="ts">
	import { Card } from "../ui/card";
	import { MarkerLabel } from "../ui/map";
	import Map from "../ui/map/Map.svelte";
	import MapMarker from "../ui/map/MapMarker.svelte";
	import MarkerContent from "../ui/map/MarkerContent.svelte";

    const { id, title, skills, description }: LandingCardContent = $props();

    const places = [
        {
            id: 'dresden',
            lat: 51.04768312666119,
            lng: 13.799242368657875,
        },
        {
            id: 'palo-alto',
            lat: 37.41926429897054, 
            lng: -122.13783497416357
        },
        {
            id: 'jaipur',
            lat: 26.8585177924985, 
            lng: 75.80463485143416
        }
    ]
</script>

<div id={id} class="h-dvh flex items-center justify-center py-16">
    <div class="flex w-full max-w-4xl flex-col items-start gap-8 text-start flex-1 justify-center">
        <div class="flex flex-col items-start gap-2">
            <h1 class="text-2xl font-bold tracking-tight sm:text-4xl">{title}</h1>
            <div class="flex flex-row gap-2 flex-wrap">
                {#each skills as skill}
                    <span class="rounded-md bg-secondary/80 px-2.5 py-1 font-mono text-xs text-secondary-foreground">{skill}</span>
                {/each}
            </div>
        </div>
        <p class="text-md tracking-tight text-muted-foreground">
            {description}
        </p>
        <div class="flex flex-col md:flex-row items-center gap-8 w-full">
            <div class="flex-1 w-full flex flex-col gap-3">
                <div class="border border-gray-200 rounded-lg p-4 bg-white/80 dark:bg-card/60">
                    <h2 class="text-base font-semibold">Frontend Lead</h2>
                    <p class="text-xs text-muted-foreground mt-1">
                        Lead the frontend team at SCALE GmbH—managed the entire development lifecycle from design to deployment.
                    </p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4 bg-white/80 dark:bg-card/60">
                    <h2 class="text-base font-semibold">Fullstack Development</h2>
                    <p class="text-xs text-muted-foreground mt-1">
                        Designed and shipped Svelte/Node applications for multiple projects (see Entreno.app, Tekka).
                    </p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4 bg-white/80 dark:bg-card/60">
                    <h2 class="text-base font-semibold">Rollout Support</h2>
                    <p class="text-xs text-muted-foreground mt-1">
                        Provided on-site support for rollouts of SCALE GmbH's SDM system at RIVIAN automotive. Diagnosing and fixing issues before they impacted the end users
                    </p>
                </div>
            </div>
            <div class="self-stretch w-full md:w-[350px] p-0 overflow-hidden rounded-lg">
                <Map center={[-15, 40]} zoom={-0.3} options={{interactive: false}}>
                    {#each places as place}
                        <MapMarker longitude={place.lng} latitude={place.lat}>
                            <MarkerContent>
                                <div
                                    class="size-4 cursor-pointer rounded-full border-2 border-white bg-rose-500 shadow-lg transition-transform hover:scale-110"
                                ></div>
                                <MarkerLabel position="bottom" class="text-xs font-medium">
                                    {place.id}
                                </MarkerLabel>
                            </MarkerContent>
                        </MapMarker>
                    {/each}
                </Map>
            </div>
        </div>
        
    </div>
</div>