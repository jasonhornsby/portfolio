<script lang="ts">
	import { ProjectCard, type ProjectCardProps } from '$lib/components/project-card';
	import { PageSection } from '$lib/components/page-section';

	interface ProjectSection {
		title: string;
		projects: ProjectCardProps[];
	}

	const sections: ProjectSection[] = [
		{
			title: 'Live projects',
			projects: [
				{
					slug: 'tekka',
					name: 'Tekka',
					description: 'Social platform to organise pickup soccer games around Melbourne.'
				},
				{
					slug: 'entreno',
					name: 'Entreno',
					description:
						'SASS platform empowering personal coaches organise their sessions, improve their service and attract more clients.'
				}
			]
		},
        {
            title: 'Technical experiments',
            projects: [
                {
                    slug: 'music-buddy',
                    name: 'Music Buddy',
                    description: 'A waveform visualizer for music files. Written in Golang compiled to webassembly.'
                }
            ]
        },
		{
			title: 'Past projects',
			projects: [
				{
					slug: 'gather-up',
					name: 'Gather Up',
					description:
						'A web platform to organise student esports events with the goal of creating a Germany wide student esports league.'
				}
			]
		}
	];
</script>

<PageSection
	title="Projects"
	description="Outside of my professional life, I've worked on a range of projects. Either to test a bussiness idea, explore the evolving landscape of web technologies or simply for fun."
>
	{#each sections as section}
		<div class="flex flex-col gap-4">
			<h2 class="w-full max-w-4xl text-2xl font-bold tracking-tight">{section.title}</h2>
			<div class="flex flex-col gap-4 w-full max-w-4xl">
				{#each section.projects as project}
					<ProjectCard {...project} />
				{/each}
			</div>
		</div>
	{/each}
</PageSection>
