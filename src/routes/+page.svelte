<script>
	import { onMount } from 'svelte';
	import Blob from './home/Blob.svelte';
	import Blurb from './home/Blurb.svelte';
	import CardContainer from './home/CardContainer.svelte';
	import ContactCard from './home/ContactCard.svelte';
	import RubberDuck from './home/RubberDuck.svelte';
</script>

<div id="page" class="relative min-h-screen overflow-hidden">
	<Blob />
	<main
		class="container mx-auto grid grid-cols-1 px-8 py-7
	sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 lg:py-14 xl:grid-cols-4
	xl:px-16 2xl:px-24"
	>
		<Blurb />
		<CardContainer isWide projectId="til" delayFactor={1} />
		<CardContainer projectId="nanoid" delayFactor={2} />
		<CardContainer projectId="corridor" delayFactor={3} />
		<CardContainer title="Rubber Duck" delayFactor={4}>
			<RubberDuck />
		</CardContainer>
		<CardContainer isWide projectId="cleptocracy" delayFactor={5} />
		<CardContainer title="Contact" delayFactor={6}>
			<ContactCard />
		</CardContainer>
	</main>
</div>
