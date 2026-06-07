<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "$lib/utils";

    const navItems = [
        {
            label: 'Work',
            href: '/#home',
        },
        {
            label: 'Contact',
            href: '/contact',
        }
    ]

    let currentPath = $derived(page.url.pathname)
</script>

<nav class="sticky top-0 z-10 w-full border-b border-border bg-background/95 backdrop-blur-sm flex flex-row items-center md:border-b-0 md:border-r md:h-dvh md:w-auto md:flex-col md:items-start md:justify-center">
    <ul class="flex flex-row items-center gap-6 px-6 py-4 md:flex-col md:items-start md:justify-center md:gap-5">
        {#each navItems as item}
        {@const isActive = item.href.startsWith("/#")
            ? currentPath === "/"
            : currentPath === item.href}
            <li>
                <a
                    class={cn(
                        "text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
                        isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                    href={item.href}
                >
                    {item.label}
                </a>
            </li>
        {/each}
    </ul>
</nav>


