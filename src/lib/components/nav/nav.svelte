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
            label: 'Projects',
            href: '/projects',
        },
        {
            label: 'Contact',
            href: '/contact',
        }
    ]

    let currentPath = $derived(page.url.pathname)
</script>

<nav class="sticky top-0 z-10 w-full bg-background flex flex-row items-center justify-start md:h-dvh md:w-auto md:flex-col md:items-start md:justify-center">
    <ul class="flex flex-row items-center justify-start gap-4 px-6 py-4 text-base font-xs sm:text-lg md:flex-col md:items-start md:justify-center">
        {#each navItems as item}
        {@const isActive = item.href.startsWith("/#")
            ? currentPath === "/"
            : currentPath === item.href}
            <li>
                <a
                    class={cn(
                        "inline-block transition-colors hover:text-foreground focus-visible:outline-none text-sm focus-visible:ring-2 focus-visible:ring-ring",
                        isActive && "font-bold"
                    )}
                    href={item.href}
                >
                    <span aria-hidden="true" class="invisible block h-0 overflow-hidden font-bold">
                        {item.label}
                    </span>
                    <span>{item.label}</span>
                </a>
            </li>
        {/each}
    </ul>
</nav>


