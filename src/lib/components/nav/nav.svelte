<script lang="ts">
	import { page } from "$app/state";
	import { cn } from "$lib/utils";

    const navItems = [
        {
            label: 'Work',
            href: '/#home',
        },
        {
            label: 'Me',
            href: '/me',
        },
        {
            label: 'Contact',
            href: '/contact',
        }
    ]

    let currentPath = $derived(page.url.pathname)
</script>

<nav class="h-dvh flex flex-col items-start justify-center ">
    <ul class="flex flex-col items-start justify-center gap-4 px-6 py-4 text-base font-xs sm:text-lg">
        {#each navItems as item}
        {@const isActive = currentPath === item.href}
            <li>
                <a
                    class={cn(
                        "transition-colors hover:text-foreground focus-visible:outline-none text-sm focus-visible:ring-2 focus-visible:ring-ring",
                        isActive && "font-bold"
                    )}
                    href={item.href}
                >
                    {item.label}
                </a>
            </li>
        {/each}
    </ul>
</nav>


