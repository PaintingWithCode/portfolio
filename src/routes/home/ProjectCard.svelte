<script lang="ts">
	import ExternalLinkArrow from './ExternalLinkArrow.svelte';
	import { getProject } from '$lib/projects';
	import { cn } from '$lib/utils';

	export let projectId: string;
	export let isWide = false;
</script>

{#await getProject(projectId) then { metadata }}
	<a href={`/projects/${projectId}`} class="h-full w-full">
		<div
			class="absolute left-4 right-2 top-2.5 flex h-6 flex-row items-center
		justify-between text-xs uppercase leading-none"
		>
			<span class="text-slate-100/80">Project • {metadata.title}</span>
			{#if metadata.externalLink}
				<a
					href={metadata.externalLink}
					title="View it live"
					target="_blank"
					class="-mb-0.5 flex aspect-square w-6 items-center justify-center
				rounded-full hover:bg-white/25"
				>
					<ExternalLinkArrow />
				</a>
			{/if}
		</div>
		<div
			class={cn('absolute -right-52 left-10 top-14', {
				'lg:right-10': Boolean(isWide)
			})}
		>
			<img
				loading="eager"
				src={`/images/${projectId}.png`}
				alt={metadata.title}
				class="object-cover object-left-top transition-transform
			group-hover:scale-[102.5%]"
			/>
		</div>
	</a>
{/await}
