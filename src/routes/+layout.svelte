<script lang="ts">
	import '../app.css';
	import Logo from '../components/template/Logo.svelte';
	let { children } = $props();
</script>

<div class="
	flex flex-col justify-center items-center gap-5
bg-black min-h-screen text-white
">

	<Logo />
	{@render children()}

</div>

