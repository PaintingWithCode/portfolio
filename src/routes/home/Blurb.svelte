<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let isVisible = false;

	onMount(() => {
		isVisible = true;
	});
</script>

<div class="sm:col-span-2 sm:row-span-2 lg:aspect-square">
	{#if isVisible}
		<h1
			in:fly={{ y: '-12px', delay: 600 }}
			class="p-4 font-display text-2xl font-light !leading-tight text-neutral-50/60 selection:bg-montana sm:p-8 sm:text-3xl md:basis-1/2 lg:text-4xl"
		>
			Hello there, I'm <span class="text-white-lilac">Aravind</span><br /> and I like
			<span class="whitespace-nowrap">
				<a href="https://github.com/PaintingWithCode" target="_blank" class="before:bg-black">
					<span>Painting With Code </span>
				</a>.
			</span>
			<br />
			<br />
			I enjoy building products with engaging interfaces and intuitive experiences.<br /><br />
			Currently based in Toronto, working as a
			<span class="text-white-lilac">Senior Fullstack Developer</span>
			for
			<span class="whitespace-nowrap">
				<a href="https://mindsea.com" target="_blank" class="before:bg-cyan-700">
					<span>Mindsea</span>
				</a>.
			</span>
		</h1>
	{/if}
</div>

<style>
	a {
		@apply text-neutral-50/90;
		position: relative;
		display: inline-block;
	}

	a span {
		position: relative;
	}

	a::before {
		content: '';
		position: absolute;
		left: -0.1px;
		right: -0.1px;
		bottom: 6px;
		height: 100%;
		transform: scaleY(0.3);
		transition: transform 0.6s cubic-bezier(0.53, 0.21, 0, 1);
		transform-origin: bottom;
		opacity: 0.6;
	}

	a:hover::before {
		transform: scaleY(0.9);
	}
</style>
