<script lang="ts">
	import type { Experience } from '$lib/data/portfolio';

	let { experiences, experience }: { experiences: Experience[]; experience: number } = $props();

	let current = $derived(experiences[experience]);
</script>

<section class="relative flex min-h-full w-full flex-col pb-[2%]">
	<div
		class="mb-[4%] flex w-full items-center text-[clamp(9px,1vw,14px)] leading-[0.8] tracking-[0.02em]"
	>
		<span>&lt; ESC</span>
	</div>

	<div
		class="mb-[1%] w-full text-[clamp(17px,1.9vw,27px)] leading-[0.9] font-normal tracking-[0.04em] whitespace-nowrap"
	>
		{current.role}
	</div>

	<div
		class="mb-[2%] w-full text-[clamp(11px,1.2vw,17px)] leading-[0.85] tracking-[0.02em] whitespace-nowrap"
	>
		{current.company}
	</div>

	<div class="text-[clamp(9px,1vw,14px)] leading-[0.81] tracking-[0.01em]">
		<div class="mb-[1.4%]">{current.date}</div>
		<div class="h-[1.2em]"></div>
		{#each current.lines as line}
			<div class="mb-[1.4%]">{line}</div>
		{/each}
	</div>

	<div
		class="mt-[4%] flex w-full items-center justify-between pt-[2%] pb-[2%] text-[clamp(8px,0.9vw,12px)] leading-[0.8]"
	>
		<span>←</span>
		<span>{experience + 1} / {experiences.length}</span>
		<span>→</span>
	</div>
</section>