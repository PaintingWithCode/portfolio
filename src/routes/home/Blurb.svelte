<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import BlurbLink from './BlurbLink.svelte';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="mb-2 sm:col-span-2 sm:row-span-2 sm:mb-0 lg:aspect-square">
	{#if isVisible}
		<h1
			in:fly={{ y: '-12px', delay: 400 }}
			class="p-4 font-serif text-2xl
		font-light !leading-tight text-neutral-50/60 selection:bg-montana sm:p-8
		sm:text-3xl md:basis-1/2 lg:text-4xl"
		>
			Hello there 👋🏽, I'm <span class="text-white-lilac">Aravind</span><br /> and I like
			<BlurbLink name="Painting With Code" url="https://github.com/PaintingWithCode" />
			<br />
			<br />
			I enjoy building products with engaging interfaces and intuitive experiences.<br /><br />
			Currently based in Toronto working as a
			<span class="text-white-lilac">Senior Fullstack Developer</span>
			for
			<BlurbLink name="Mindsea" url="https://mindsea.com" variant="CYAN" />
		</h1>
	{/if}
</div>
