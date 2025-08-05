<script>
	const projects = [
		{
			name: 'Cryptoden',
			summary: 'Crypto NFT Trading Platform',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			image: '/assets/cryptoden.png',
			stack: ['React', 'Nextjs'],
			link: {
				live: 'https://cryptoden.vercel.app',
				github: 'https://github.com/tejxsmore/cryptoden'
			}
		},
		{
			name: 'Teker',
			summary: 'Crypto NFT Trading Platform',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			image: '/assets/cryptoden.png',
			stack: ['SvelteKit', 'PostgreSQL'],
			link: {
				live: 'https://teker.vercel.app',
				github: 'https://github.com/tejxsmore/teker'
			}
		},
		{
			name: 'Tekstack',
			summary: 'Software review and Blogging Platform',
			description:
				'Your all-in-one platform to discover, filter, and learn about the latest and best tools in AI, productivity, automation, and more. It is also a collaborative blog platform, users can write, read, update, and delete blogs, with support for tags to organize content. Readers can save, like, comment on, and share their favorite blogs.',
			image: '/assets/tekstack.png',
			stack: ['SvelteKit', 'Hygraph CMS'],
			link: {
				live: 'https://tekstack.tejasmore.in',
				github: 'https://github.com/tejxsmore/tekstack'
			}
		},
		{
			name: 'Hirehero',
			summary: 'Full fledged Job Portal',
			description:
				'End-to-end hiring platform with real-time communication, built-in code editor for interviews, and instant updates. Built with SvelteKit, PostgreSQL, and AWS.',
			image: '/assets/hirehero.png',
			stack: ['SvelteKit', 'Socket.io'],
			link: {
				live: 'https://hirehero.tejasmore.in',
				github: 'https://github.com/tejxsmore/hirehero'
			}
		}
	];
</script>

<h2 class="border-b-2 p-5 text-center text-2xl font-semibold">Projects</h2>
<div class="grid w-full grid-rows-2 divide-y-2 lg:grid-cols-2 lg:divide-y-0">
	{#each projects as project, i}
		<div
			class="space-y-5 p-5
				{i === 0 ? 'border-b-2 lg:border-r-2' : ''}
				{i === 1 ? 'border-b-2' : ''}
				{i === 2 ? 'lg:border-r-2' : ''}"
		>
			<div class="flex items-center justify-between">
				<h1 class="text-2xl font-semibold">{project.name}</h1>
				<div class="flex gap-5">
					<a href={project.link.github} class="font-semibold" target="_blank">GitHub</a>
					<a href={project.link.live} class="font-semibold" target="_blank">Live</a>
				</div>
			</div>
			<!-- <p>{project.summary}</p>
			<img src={project.image} alt="Something" class="rounded-t-[5px]" /> -->
		</div>
	{/each}
</div>
