import { getProject } from '$lib/projects';
import { error } from '@sveltejs/kit';
import type { PageLoadEvent } from './$types';

export function entries() {
	return [{ id: 'til' }, { id: 'nanoid' }, { id: 'corridor' }, { id: 'cleptocracy' }];
}

export async function load({ params }: PageLoadEvent) {
	try {
		const projectId = params.id;
		const project = await getProject(projectId);
		return project;
	} catch {
		throw error(404, 'Not found');
	}
}
