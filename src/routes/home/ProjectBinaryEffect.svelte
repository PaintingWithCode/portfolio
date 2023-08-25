<script lang="ts">
	export let accentColor: string;

	let binaryElement: HTMLDivElement;
	let lastTransitionTime = 0;
	const animationConfig: KeyframeAnimationOptions = {
		duration: 250,
		fill: 'forwards'
	};

	function getRandomString() {
		const characters = '01';
		let result = new Array(2000);

		for (let i = 0; i < 2000; i++) {
			result[i] = characters[Math.floor(Math.random() * 2)];
		}

		return result.join('');
	}

	export function handleMouseEnter() {
		binaryElement.animate({ opacity: 0.15 }, animationConfig);
	}

	export function handleMouseMove() {
		const time = Date.now();
		if (time - lastTransitionTime < 128) return;
		binaryElement.innerHTML = getRandomString();
		lastTransitionTime = time;
	}

	export function handleMouseLeave() {
		binaryElement.animate({ opacity: 0 }, animationConfig);
	}
</script>

<div class="binary" bind:this={binaryElement} style={`color: ${accentColor};`} />

<style lang="postcss">
	.binary {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		text-align: center;
		font-family: 'input-mono', monospace;
		font-size: 0.85rem;
		word-wrap: break-word;
		line-height: 1.15;
		opacity: 0;
	}
</style>
