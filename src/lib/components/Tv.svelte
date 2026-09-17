<script lang="ts">
	let { children }: { children: import('svelte').Snippet } = $props();
</script>

<div
	class="absolute top-1/2 left-1/2 z-2 w-[min(38vw,590px)] -translate-x-1/2 -translate-y-1/2 max-[700px]:top-[43%] max-[700px]:w-[82vw]"
>
	<img
		src="/tv.svg"
		alt=""
		class="pointer-events-none block h-auto w-full select-none"
		draggable="false"
		aria-hidden="true"
	/>

	<div
		class="tv-clip absolute top-[14.2%] left-[14.25%] z-3 h-[40%] w-[64%] overflow-hidden bg-transparent max-[700px]:h-[36.5%]"
	>
		<div
			class="scrollbar-hide animate-flicker relative h-full min-h-0 w-full overflow-x-hidden overflow-y-auto p-[8%_10%] overscroll-contain text-green-dark [text-shadow:0_0_0.1em_rgba(0,20,5,0.7),0_0_0.2em_rgba(0,30,5,0.1)] max-[700px]:[text-shadow:0_0_0.07em_rgba(0,20,5,0.58)]"
		>
			{@render children()}
		</div>
	</div>
</div>