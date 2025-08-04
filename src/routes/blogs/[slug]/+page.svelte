<script lang="ts">
	import MarkdownParser from '$lib/components/MarkdownParser.svelte';

	const { data } = $props();
	const { blog } = data;

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
</script>

<div class="min-h-screen space-y-10 p-10 md:mx-20 md:space-y-20 md:border-x-2 md:p-20">
	<h1 class="text-2xl font-semibold md:text-4xl">{blog.title}</h1>
	<p class="font-semibold">{formatDate(blog.publishDate)}</p>

	<div class="">
		<MarkdownParser content={blog.content} />
	</div>
</div>
