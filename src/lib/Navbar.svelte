<script>
	import { page } from '$app/state';

	const activeTab = $derived.by(() => {
		if (page.url.pathname === '/') return 'work';
		if (page.url.pathname === '/about') return 'about';
		return '';
	});
</script>

<div class="fixed top-5 left-1/2 z-50 -translate-x-1/2">
	<nav
		class="flex items-center gap-1 rounded-[16px] border border-[#161D6F]/50
		bg-[#211951]/70 p-1 shadow-md backdrop-blur-md transition-all duration-300 hover:shadow-md"
	>
		<a
			href="/"
			class="rounded-[12px] px-4 py-2 text-sm transition hover:bg-[#03001C]/20 hover:text-white
			{activeTab === 'work' ? 'bg-[#03001C]/20 text-white' : ''}"
		>
			Work
		</a>
		<a
			href="/about"
			class="rounded-[12px] px-4 py-2 text-sm transition hover:bg-[#03001C]/20 hover:text-white
			{activeTab === 'about' ? 'bg-[#03001C]/20 text-white' : ''}"
		>
			About
		</a>
		<a
			href="/tejasmore-resume.pdf"
			download="tejasmore-resume.pdf"
			class="rounded-[12px] bg-[#A9B5DF] px-4 py-2 text-sm font-medium text-[#211951]/90 transition hover:bg-[#B8CFCE]"
		>
			Resume
		</a>
	</nav>
</div>
