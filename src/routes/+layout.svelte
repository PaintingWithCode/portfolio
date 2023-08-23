<script>
	import { afterNavigate } from '$app/navigation';
	import '../app.postcss';

	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
</script>

<slot />
