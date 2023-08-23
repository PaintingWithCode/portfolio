import type { SvelteComponent } from 'svelte';

type Project = {
	default: SvelteComponent;
	metadata: {
		title: string;
		externalLink?: string;
	};
};

export async function getProject(id: string) {
	const project = await import(`../projects/${id}/${id}.md`);

	return {
		...project,
		metadata: {
			...project.metadata
		}
	} as Project;
}
