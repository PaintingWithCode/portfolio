<script>
	import { afterNavigate } from '$app/navigation';
	import '../app.css';

	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
</script>

<slot />
