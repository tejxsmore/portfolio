<script lang="ts">
	const { data } = $props();
	const { blogs } = data;

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

<div class="min-h-screen divide-y-2 md:mx-20 md:border-x-2">
	<div class="grid md:grid-cols-2">
		{#each blogs as blog, i}
			<div
				class="space-y-10 p-10
				{i === 0 ? 'border-b-2 md:border-r-2' : ''}
				{i === 1 ? 'border-b-2' : ''}
				{i === 2 ? 'md:border-r-2' : ''}"
			>
				<div>
					<a href={`/blogs/${blog.slug}`} class="text-2xl font-semibold">{blog.title}</a>
				</div>
				<p class="font-semibold">{formatDate(blog.publishDate)}</p>
			</div>
		{/each}
	</div>
</div>
