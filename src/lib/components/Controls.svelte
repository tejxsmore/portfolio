<script lang="ts">
	let {
		onNavigate
	}: {
		onNavigate: (direction: 'up' | 'down' | 'left' | 'right' | 'enter' | 'escape') => void;
	} = $props();
</script>

<nav class="tv-controls" aria-label="Portfolio navigation">
	<button
		class="tv-btn h-[clamp(31px,3vw,40px)] w-[clamp(40px,3.6vw,51px)] rounded-[5px] text-[clamp(9px,1vw,14px)] tracking-[0.04em] text-[#7d867d] [text-shadow:0_1px_0_#000]"
		type="button"
		aria-label="Escape"
		onclick={() => onNavigate('escape')}
	>
		ESC
	</button>

	<button
		class="tv-btn h-[clamp(31px,3vw,40px)] w-[clamp(31px,3vw,40px)] rounded-full"
		type="button"
		aria-label="Up"
		onclick={() => onNavigate('up')}
	>
		<span
			class="h-0 w-0 border-x-[6px] border-b-[9px] border-x-transparent border-b-button-icon filter-[drop-shadow(0_1px_0_rgba(255,255,255,0.08))]"
		></span>
	</button>

	<button
		class="tv-btn h-[clamp(31px,3vw,40px)] w-[clamp(31px,3vw,40px)] rounded-full"
		type="button"
		aria-label="Down"
		onclick={() => onNavigate('down')}
	>
		<span
			class="h-0 w-0 border-x-[6px] border-t-[9px] border-x-transparent border-t-button-icon filter-[drop-shadow(0_1px_0_rgba(255,255,255,0.08))]"
		></span>
	</button>

	<button
		class="tv-btn h-[clamp(31px,3vw,40px)] w-[clamp(31px,3vw,40px)] rounded-full"
		type="button"
		aria-label="Left"
		onclick={() => onNavigate('left')}
	>
		<span
			class="h-0 w-0 border-y-[6px] border-r-[9px] border-y-transparent border-r-button-icon filter-[drop-shadow(0_1px_0_rgba(255,255,255,0.08))]"
		></span>
	</button>

	<button
		class="tv-btn h-[clamp(31px,3vw,40px)] w-[clamp(31px,3vw,40px)] rounded-full"
		type="button"
		aria-label="Right"
		onclick={() => onNavigate('right')}
	>
		<span
			class="h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-button-icon filter-[drop-shadow(0_1px_0_rgba(255,255,255,0.08))]"
		></span>
	</button>

	<button
		class="tv-btn ml-0.5 h-[clamp(31px,3vw,40px)] w-[clamp(40px,3.6vw,51px)] rounded-[5px] text-[clamp(9px,1vw,14px)] tracking-[0.04em] text-[#7d867d] [text-shadow:0_1px_0_#000]"
		type="button"
		aria-label="OK"
		onclick={() => onNavigate('enter')}
	>
		OK
	</button>
</nav>