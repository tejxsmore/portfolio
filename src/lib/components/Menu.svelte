<script lang="ts">
	let { menu, selected }: { menu: string[]; selected: number } = $props();
</script>

<div class="min-h-full w-full">
	<h1
		class="m-0 mb-[5%] text-[clamp(17px,1.9vw,27px)] leading-[0.9] font-normal tracking-[0.045em] whitespace-nowrap"
	>
		TEJAS MORE<span class="animate-blink">_</span>
	</h1>

	<div class="flex flex-col gap-[1.5%]">
		{#each menu as item, index}
			<div
				class="flex items-center text-[clamp(13px,1.4vw,21px)] leading-[0.85] tracking-[0.02em] whitespace-nowrap"
			>
				<span class={`w-[0.9em] flex-none ${selected === index ? 'visible' : 'invisible'}`}
					>&gt;</span
				>
				<span>{item}</span>
			</div>
		{/each}
	</div>
</div>