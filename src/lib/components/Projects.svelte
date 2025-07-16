<script lang="ts">
	const projects = [
		{
			name: 'Cryptoden',
			img: '/img/cryptoden.png',
			summary: 'Crypto screener and NFT marketplace',
			description:
				'A decentralized platform where users can explore all NFTs available on the marketplace, view real-time prices of various cryptocurrencies, connect their crypto wallet, and seamlessly buy or sell NFTs.',
			stack: ['Sveltekit', 'Better-auth', 'Hygraph CMS'],
			link: {
				github: 'https://github.com/tejxsmore/cryptoden',
				live: 'https://cryptoden.vercel.app',
				youtube: ''
			}
		},
		{
			name: 'Tekstack',
			img: '/img/tekstack.png',
			summary: 'Tool discovery and modern multi-user blog platform',
			description:
				'Your all-in-one platform to discover, filter, and learn about the latest and best tools in AI, productivity, automation, and more. It is also a collaborative blog platform, users can write, read, update, and delete blogs, with support for tags to organize content. Readers can save, like, comment on, and share their favorite blogs.',
			stack: ['Sveltekit', 'Better-auth', 'Hygraph CMS'],
			link: {
				github: 'https://github.com/tejxsmore/tekstack',
				live: 'https://tekstack.tejasmore.in',
				youtube: ''
			}
		},
		{
			name: 'Hirehero',
			img: '/img/tekstack.png',
			summary: 'End to end hiring platform',
			description:
				'HireHero is an end-to-end job application platform that streamlines the entire hiring process—from job posting and candidate sourcing to screening, interviewing, and onboarding. Designed for both employers and job seekers.',
			stack: ['Sveltekit', 'Better-auth', 'PostgreSQL', 'Fuse.js'],
			link: {
				github: 'https://github.com/tejxsmore/hirehero',
				live: 'https://hirehero.tejasmore.in',
				youtube: ''
			}
		}
	];
	import { ArrowRight } from '@lucide/svelte';
</script>

<div class="space-y-12 md:space-y-24">
	{#each projects as { name, img, summary, stack, link }}
		<div class="rounded-[20px] bg-[#03001C]/30 p-1 shadow-sm">
			<div
				class="w-full cursor-pointer space-y-4 rounded-[16px] bg-[#03001C]/20 p-4 pb-0 md:max-w-3xl md:p-8 md:pb-0"
			>
				<div class="flex items-center justify-between">
					<h2 class="text-xl font-semibold">{name}</h2>
					<div><ArrowRight size="20" /></div>
				</div>
				<h4 class="text-[#E9E4E6]">{summary}</h4>
				<div class="md:m-20 md:mb-0">
					<img src={img} alt={name} class="rounded-t-[4px]" />
				</div>
			</div>
		</div>
	{/each}
</div>
