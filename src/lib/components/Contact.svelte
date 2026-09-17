<script lang="ts">
	import type { LinkItem } from '$lib/data/portfolio';

	let { contacts, contactSelected }: { contacts: LinkItem[]; contactSelected: number } = $props();
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
		TEJAS MORE
	</div>

	<div class="w-full">
		<div
			class="text-[clamp(11px,1.2vw,17px)] leading-[0.85] tracking-[0.02em]"
		>
			HEYYTEJAS@GMAIL.COM
		</div>

		<div class="h-[0.25em]"></div>

		<div class="mt-[4%] flex flex-col gap-[1.5%]">
			{#each contacts as contact, index}
				<div
					class="flex items-center text-[clamp(13px,1.4vw,21px)] leading-[0.82] tracking-[0.02em] whitespace-nowrap"
				>
					<span
						class={`w-[0.9em] flex-none ${contactSelected === index ? 'visible' : 'invisible'}`}
					>&gt;</span
					>
					<span>{contact.label}</span>
				</div>
			{/each}
		</div>
	</div>
</section>