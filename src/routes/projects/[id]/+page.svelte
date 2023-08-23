<script lang="ts">
	import { onMount, type SvelteComponent } from 'svelte';
	import BackLink from './BackLink.svelte';
	import { fly } from 'svelte/transition';

	export let data;
	let isVisible = false;

	const { title } = data.metadata;
	$: content = data.default as unknown as typeof SvelteComponent;

	onMount(() => {
		isVisible = true;
	});
</script>

<main class="relative mx-auto max-w-2xl px-8 py-14 md:px-0">
	{#if isVisible}
		<article
			in:fly={{ y: '24px' }}
			class="prose lg:prose-lg prose-invert prose-headings:text-white-lilac prose-headings:leading-none prose-h1:mb-0 prose-img:mt-5 prose-strong:text-white-lilac/90 prose-p:text-white-lilac/80 prose-ul:text-white-lilac/80"
		>
			<div
				class="-mt-8 flex flex-col items-start space-y-6 lg:-ml-16 lg:flex-row lg:items-center lg:space-x-7"
			>
				<BackLink />
				<h1 class="font-serif font-light sm:text-4xl lg:text-5xl">
					{title}
				</h1>
			</div>
			<svelte:component this={content} />
		</article>
	{/if}
</main>
