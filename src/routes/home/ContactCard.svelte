<script lang="ts">
	import { browser } from '$app/environment';
	import { type SvelteComponent, onMount } from 'svelte';

	let LottiePlayer: typeof SvelteComponent;
	let autoplay = false;

	onMount(async () => {
		if (browser) {
			const module = await import('@lottiefiles/svelte-lottie-player');
			LottiePlayer = module.LottiePlayer;
		}
	});
</script>

<a
	href="mailto:hello@aravindmurali.com"
	class="z-40 flex h-full w-full items-center justify-center opacity-75 grayscale transition duration-500 group-hover:grayscale-0"
>
	{#if LottiePlayer}
		<svelte:component
			this={LottiePlayer}
			src="/images/contact.json"
			autoplay={false}
			loop={true}
			hover={true}
			controls={false}
			renderer="svg"
			class="p-8"
			background="transparent"
		/>
	{/if}
</a>
