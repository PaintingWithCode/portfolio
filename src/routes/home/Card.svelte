<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import ProjectCard from './ProjectCard.svelte';

	export let projectId = '';
	export let title = '';
	export let isWide = false;
	export let delayFactor = 0;

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});

	const delay = 400 + delayFactor * 150;
</script>

<div
	class={cn('aspect-square p-2', {
		'lg:col-span-2 lg:aspect-[2]': Boolean(isWide)
	})}
>
	{#if isVisible}
		<div
			class="group relative flex h-full justify-center overflow-hidden
		rounded-sm bg-montana"
			in:fly={{ y: '-12px', delay }}
		>
			{#if projectId}
				<ProjectCard {projectId} {isWide} />
			{:else}
				<div
					class="absolute left-4 right-4 top-4 z-20 flex flex-row items-center
				justify-between text-xs uppercase leading-none"
				>
					<span class="text-slate-100/80">{title}</span>
				</div>
				<slot />
			{/if}
		</div>
	{/if}
</div>
