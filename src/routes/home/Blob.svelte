<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let blob: HTMLDivElement;
	let showBlob = false;
	let isSafari = false;
	let hasMoved = false;
	let pageX: number;
	let pageY: number;

	onMount(() => {
		// To prevent layout shift on first paint
		isSafari = navigator.userAgent.includes('Safari');
		showBlob = true;
	});

	async function handleMouseMove(event: MouseEvent) {
		pageX = event.pageX;
		pageY = event.pageY;
	}

	$: {
		if (blob && pageX && pageY) {
			requestAnimationFrame(() => {
				blob.animate(
					{
						left: `${pageX}px`,
						top: `${pageY}px`
					},
					{ duration: 3000, fill: 'forwards' }
				);

				// Animation is buggy in Safari where the blob will reset to the center of
				// page if the mouse is not still during the animation. This has been the
				// best hack I've found so far to get a consistent experience across browsers.
				if (isSafari && !hasMoved) {
					blob.style.left = `${pageX}px`;
					blob.style.top = `${pageY}px`;
					hasMoved = true;
				}
			});
		}
	}
</script>

<svelte:window on:mousemove={handleMouseMove} />
{#if showBlob}
	<div
		id="blob"
		style="top: 50%; left: 50%;"
		bind:this={blob}
		in:fade={{ delay: isSafari ? 200 : 50 }}
	/>
{/if}
<div id="blur" />

<style lang="postcss">
	@keyframes rotate {
		from {
			rotate: 0deg;
		}

		to {
			rotate: 360deg;
		}
	}

	#blob {
		z-index: -2;
		height: 21vmax;
		aspect-ratio: 1;
		position: absolute;
		translate: -50% -50%;
		border-radius: 50%;
		animation: rotate 20s infinite;
		opacity: 0.8;
		background: linear-gradient(to right, theme(colors.rose.400), theme(colors.orange.300));
	}

	#blur {
		height: 100%;
		width: 100%;
		position: absolute;
		z-index: -1;
		backdrop-filter: blur(4vmax);
	}
</style>
