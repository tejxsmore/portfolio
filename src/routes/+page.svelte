<script lang="ts">
	import Projects from '$lib/components/Projects.svelte';
</script>

<main class="relative z-0 p-4">
	<section class="flex min-h-screen items-center justify-center text-center">
		<div>
			<p class="text-2xl">Hello, I am</p>
			<h1 class="text-5xl font-bold md:text-7xl">Tejas More</h1>
		</div>
	</section>

	<section id="projects" class="flex min-h-screen justify-center">
		<Projects />
	</section>
</main>
