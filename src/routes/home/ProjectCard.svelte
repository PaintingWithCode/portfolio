<script lang="ts">
	import ExternalLinkArrow from './ExternalLinkArrow.svelte';
	import { getProject } from '$lib/projects';
	import { cn } from '$lib/utils';
	import ProjectBinaryEffect from './ProjectBinaryEffect.svelte';

	export let projectId: string;
	export let isWide = false;

	let onMouseEnter: () => void;
	let onMouseMove: () => void;
	let onMouseLeave: () => void;
</script>

{#await getProject(projectId) then { metadata }}
	<a
		href={`/projects/${projectId}`}
		class="card h-full w-full"
		on:mouseenter={onMouseEnter}
		on:mousemove={onMouseMove}
		on:mouseleave={onMouseLeave}
	>
		<div
			class="absolute left-3.5 right-2.5 top-2.5 z-20 flex h-6 flex-row items-center
		justify-between text-xs uppercase leading-none"
		>
			<span class="text-slate-100/80 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
				>Project • {metadata.title}</span
			>
			{#if metadata.externalLink}
				<a
					href={metadata.externalLink}
					title="View it live"
					target="_blank"
					class="-mb-0.5 flex aspect-square w-6 items-center justify-center
				rounded-full bg-montana hover:bg-[#5a5563]"
				>
					<ExternalLinkArrow />
				</a>
			{/if}
		</div>
		<ProjectBinaryEffect
			accentColor={metadata.accentColor}
			bind:handleMouseEnter={onMouseEnter}
			bind:handleMouseMove={onMouseMove}
			bind:handleMouseLeave={onMouseLeave}
		/>
		<div
			class={cn(
				'absolute -right-52 left-10 top-14 z-20 transition group-hover:scale-[102.5%] group-hover:drop-shadow',
				{
					'lg:right-10': Boolean(isWide)
				}
			)}
		>
			<img
				loading="eager"
				src={`/images/${projectId}.webp`}
				alt={metadata.title}
				class="object-cover object-left-top"
			/>
		</div>
	</a>
{/await}
