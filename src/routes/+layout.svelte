<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';

	export const prerender = true;
</script>

<div class="app bg-hero-pattern bg-slate-500 bg-opacity-100">
	<Header />

	<!-- <main class="container mx-auto my-0 flex-1 flex-col max-w-[64rem] py-4"> -->
	<main class="container mx-auto my-0 flex-1 flex-col">
		<slot />
	</main>

	<footer>
		<p>Made with <a href="https://kit.svelte.dev">kit.svelte.dev</a> :) </p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
