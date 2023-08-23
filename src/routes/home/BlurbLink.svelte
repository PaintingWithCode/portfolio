<script lang="ts">
	export let name: string;
	export let url: string;
	export let variant: 'BLACK' | 'CYAN' = 'BLACK';

	const bgColor = {
		BLACK: 'before:bg-black',
		CYAN: 'before:bg-cyan-700'
	};
</script>

<span class="whitespace-nowrap">
	<a
		href={url}
		target="_blank"
		class={`relative inline-block text-neutral-50/90 ${bgColor[variant]}`}
	>
		<span class="relative">{name}</span>
	</a>.
</span>

<style>
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
