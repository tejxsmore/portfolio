<script>
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<div class="divide-y-2 md:mx-20 md:border-x-2">
	<div class="h-screen space-y-10 p-10 md:p-20">
		<p class="text-2xl font-semibold md:text-4xl">Hello, I am</p>
		<h1 class="text-[60px] font-black md:text-[120px]">TEJAS MORE.</h1>
		<p class="text-2xl font-semibold md:text-4xl">Software Engineer from Mumbai</p>
	</div>

	<div class="min-h-screen">
		<Projects />
	</div>

	<div class="h-screen">
		<Contact />
	</div>
</div>
