<script lang="ts">
	import { onMount } from 'svelte';

	const { data } = $props();
	const { blogs } = data;

	let containerElement = $state<HTMLElement>();
	let showBottomBorder = $state(false);

	function formatDate(isoDate: string): string {
		try {
			const date = new Date(isoDate);
			if (isNaN(date.getTime())) return 'Invalid date';
			const months = [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December'
			];
			const day = String(date.getDate()).padStart(2, '0');
			const month = months[date.getMonth()];
			const year = date.getFullYear();
			return `${day} ${month}, ${year}`;
		} catch {
			return 'Invalid date';
		}
	}

	function checkContentHeight() {
		if (containerElement) {
			const containerHeight = containerElement.offsetHeight;
			const screenHeight = window.innerHeight;
			showBottomBorder = containerHeight <= screenHeight;
		}
	}

	$effect(() => {
		if (blogs && containerElement) {
			setTimeout(checkContentHeight, 0);
		}
	});

	onMount(() => {
		checkContentHeight();
		window.addEventListener('resize', checkContentHeight);

		return () => {
			window.removeEventListener('resize', checkContentHeight);
		};
	});
</script>

<div bind:this={containerElement} class="min-h-screen md:mx-20 md:border-x-2">
	<div class="grid divide-y-2 {showBottomBorder ? 'border-b-0' : ''} md:grid-cols-2 md:divide-y-0">
		{#each blogs as blog, i}
			<div
				class="space-y-10 p-10
				{i % 2 === 0 ? 'md:border-r-2 md:border-b-2' : 'md:border-b-2'}
				"
			>
				<div><a href={`/blog/${blog.slug}`} class="text-2xl font-semibold">{blog.title}</a></div>
				<p class="font-semibold">{formatDate(blog.createdAt)}</p>
			</div>
		{/each}
	</div>
</div>
