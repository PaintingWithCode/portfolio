<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';
	import BackLink from './BackLink.svelte';
	import { fly } from 'svelte/transition';
	import ExternalLinkGlobe from './ExternalLinkGlobe.svelte';

	export let data;
	let isVisible = false;

	const { title, externalLink } = data.metadata;
	$: content = data.default as unknown as typeof SvelteComponent;

	onMount(() => {
		isVisible = true;
	});
</script>

<main class="relative mx-auto max-w-2xl px-8 py-14 md:px-0">
	{#if isVisible}
		<article
			in:fly={{ y: '24px' }}
			class="prose lg:prose-xl prose-invert prose-headings:text-white-lilac prose-h1:mb-0 prose-img:mt-6 prose-strong:text-white-lilac/90 prose-p:text-white-lilac/80 prose-ul:text-white-lilac/80"
		>
			<div
				class="-mt-8 flex flex-col items-start space-x-0 space-y-6 lg:-ml-16 lg:flex-row lg:items-center lg:space-x-7 lg:space-y-0"
			>
				<BackLink />
				<div class="flex w-full items-center justify-between">
					<h1 class="font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
						{title}
					</h1>
					{#if externalLink}
						<ExternalLinkGlobe url={externalLink} />
					{/if}
				</div>
			</div>
			<svelte:component this={content} />
		</article>
	{/if}
</main>
