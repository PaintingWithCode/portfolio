<script>
	import Blob from './home/Blob.svelte';
	import Blurb from './home/Blurb.svelte';
	import Card from './home/Card.svelte';
</script>

<div class="relative min-h-screen overflow-hidden">
	<Blob />
	<main
		class="container mx-auto grid grid-cols-1 px-8 py-7 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 lg:py-14 xl:grid-cols-4 xl:px-16 2xl:px-24"
	>
		<Blurb />
		<Card isWide title="Project • Today I Learned" delayFactor={1} />
		<Card title="Project • Nano ID Generator" delayFactor={2} />
		<Card title="Project • Corridor" delayFactor={3} />
		<Card title="Project • Rubber Duck" delayFactor={4} />
		<Card isWide title="Project • Cleptocracy" delayFactor={5} />
		<Card title="Contact" delayFactor={6} />
	</main>
</div>
