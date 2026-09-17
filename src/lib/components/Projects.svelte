<script lang="ts">
	import type { Project } from '$lib/data/portfolio';

	let {
		projects,
		project,
		projectLinkSelected
	}: { projects: Project[]; project: number; projectLinkSelected: number } = $props();

	let current = $derived(projects[project]);
</script>

<section class="relative flex min-h-full w-full flex-col pb-[2%]">
	<div
		class="mb-[4%] flex w-full items-center justify-between text-[clamp(9px,1vw,14px)] leading-[0.8] tracking-[0.02em]"
	>
		<span>&lt; ESC</span>
		<span class="flex items-center gap-[0.08em] whitespace-nowrap">
			NEXT
			<span class="translate-y-[-0.02em] font-sans text-[1.35em] leading-[0.5]">›</span>
		</span>
	</div>

	<div
		class="mb-[3%] w-full text-[clamp(17px,1.9vw,27px)] leading-[0.9] font-normal tracking-[0.04em] whitespace-nowrap"
	>
		{current.title}
	</div>

	<div
		class="mb-[5%] w-full text-[clamp(7px,0.8vw,12px)] leading-[0.82] tracking-[0.01em] whitespace-normal wrap-anywhere"
	>
		{current.stack}
	</div>

	<div class="mb-[5%] flex flex-col gap-[1.8%]">
		{#each current.links as link, index}
			<div
				class="flex w-fit items-center text-[clamp(13px,1.4vw,21px)] leading-[0.82] tracking-[0.02em] whitespace-nowrap"
			>
				<span
					class={`w-[0.9em] flex-none ${projectLinkSelected === index ? 'visible' : 'invisible'}`}
					>&gt;</span
				>
				<span>{link.label}</span>
			</div>
		{/each}
	</div>

	<div class="text-[clamp(9px,1vw,14px)] leading-[0.81] tracking-[0.01em]">
		{#each current.lines as line}
			<div class="mb-[1.4%]">{line}</div>
		{/each}
	</div>

	<div
		class="mt-[4%] flex w-full items-center justify-between pt-[2%] pb-[2%] text-[clamp(8px,0.9vw,12px)] leading-[0.8]"
	>
		<span>←</span>
		<span>{project + 1} / {projects.length}</span>
		<span>→</span>
	</div>
</section>