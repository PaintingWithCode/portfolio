<script>
	import Blob from './home/Blob.svelte';
	import Blurb from './home/Blurb.svelte';
	import Card from './home/Card.svelte';
	import ContactCard from './home/ContactCard.svelte';
</script>

<div id="page" class="relative min-h-screen overflow-hidden">
	<Blob />
	<main
		class="container mx-auto grid grid-cols-1 px-8 py-7
	sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 lg:py-14 xl:grid-cols-4
	xl:px-16 2xl:px-24"
	>
		<Blurb />
		<Card isWide projectId="til" delayFactor={1} />
		<Card projectId="nanoid" delayFactor={2} />
		<Card projectId="corridor" delayFactor={3} />
		<Card title="Rubber Duck" delayFactor={4}>
			<div class="relative">
				<div
					class="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-montana/60 to-montana/5 transition-opacity duration-500 group-hover:opacity-0"
				/>
				<img loading="eager" alt="Cat" src="/images/isla.webp" class="aspect-square h-full" />
			</div>
		</Card>
		<Card isWide projectId="cleptocracy" delayFactor={5} />
		<Card title="Contact" delayFactor={6}>
			<ContactCard />
		</Card>
	</main>
</div>
