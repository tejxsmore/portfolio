<script lang="ts">
	import Tv from '$lib/components/Tv.svelte';
	import MenuScreen from '$lib/components/Menu.svelte';
	import AboutScreen from '$lib/components/About.svelte';
	import ProjectsScreen from '$lib/components/Projects.svelte';
	import ExperienceScreen from '$lib/components/Experience.svelte';
	import ContactScreen from '$lib/components/Contact.svelte';
	import Controls from '$lib/components/Controls.svelte';
	import { menu, projects, experiences, contacts } from '$lib/data/portfolio';

	type Screen = 'menu' | 'about' | 'projects' | 'experience' | 'contact';

	function getStored<T>(key: string, fallback: T): T {
		if (typeof window === 'undefined') {
			return fallback;
		}

		try {
			const value = sessionStorage.getItem(key);
			return value ? (JSON.parse(value) as T) : fallback;
		} catch {
			return fallback;
		}
	}

	let screen = $state<Screen>(getStored<Screen>('portfolio-screen', 'menu'));
	let selected = $state(getStored<number>('portfolio-menu-selected', 0));
	let project = $state(getStored<number>('portfolio-project', 0));
	let projectLinkSelected = $state(getStored<number>('portfolio-project-link', 0));
	let experience = $state(getStored<number>('portfolio-experience', 0));
	let contactSelected = $state(getStored<number>('portfolio-contact-selected', 0));

	$effect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		sessionStorage.setItem('portfolio-screen', JSON.stringify(screen));
		sessionStorage.setItem('portfolio-menu-selected', JSON.stringify(selected));
		sessionStorage.setItem('portfolio-project', JSON.stringify(project));
		sessionStorage.setItem('portfolio-project-link', JSON.stringify(projectLinkSelected));
		sessionStorage.setItem('portfolio-experience', JSON.stringify(experience));
		sessionStorage.setItem('portfolio-contact-selected', JSON.stringify(contactSelected));
	});

	let glowClass = $derived(
		screen === 'menu'
			? 'glow-menu'
			: screen === 'about'
				? 'glow-about'
				: screen === 'projects'
					? 'glow-projects'
					: screen === 'experience'
						? 'glow-experience'
						: 'glow-contact'
	);

	function openExternal(url: string) {
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	function navigate(direction: 'up' | 'down' | 'left' | 'right' | 'enter' | 'escape') {
		if (direction === 'escape') {
			screen = 'menu';
			return;
		}

		if (screen === 'menu') {
			if (direction === 'down') {
				selected = (selected + 1) % menu.length;
			}

			if (direction === 'up') {
				selected = (selected - 1 + menu.length) % menu.length;
			}

			if (direction === 'enter') {
				screen = menu[selected].toLowerCase() as Screen;
			}

			return;
		}

		if (screen === 'projects') {
			if (direction === 'right') {
				project = (project + 1) % projects.length;
				projectLinkSelected = 0;
			}

			if (direction === 'left') {
				project = (project - 1 + projects.length) % projects.length;
				projectLinkSelected = 0;
			}

			if (direction === 'down' && projects[project].links.length > 0) {
				projectLinkSelected = (projectLinkSelected + 1) % projects[project].links.length;
			}

			if (direction === 'up' && projects[project].links.length > 0) {
				projectLinkSelected =
					(projectLinkSelected - 1 + projects[project].links.length) %
					projects[project].links.length;
			}

			if (direction === 'enter' && projects[project].links.length > 0) {
				const link = projects[project].links[projectLinkSelected];
				openExternal(link.url);
			}

			return;
		}

		if (screen === 'experience') {
			if (experiences.length > 1) {
				if (direction === 'right') {
					experience = (experience + 1) % experiences.length;
				}

				if (direction === 'left') {
					experience = (experience - 1 + experiences.length) % experiences.length;
				}
			}

			return;
		}

		if (screen === 'contact') {
			if (direction === 'down') {
				contactSelected = (contactSelected + 1) % contacts.length;
			}

			if (direction === 'up') {
				contactSelected = (contactSelected - 1 + contacts.length) % contacts.length;
			}

			if (direction === 'enter') {
				openExternal(contacts[contactSelected].url);
			}
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		const navigationKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape'];

		if (navigationKeys.includes(event.key)) {
			event.preventDefault();
		}

		if (event.key === 'ArrowUp') navigate('up');
		if (event.key === 'ArrowDown') navigate('down');
		if (event.key === 'ArrowLeft') navigate('left');
		if (event.key === 'ArrowRight') navigate('right');
		if (event.key === 'Enter') navigate('enter');
		if (event.key === 'Escape') navigate('escape');
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<main class="fixed inset-0 isolate h-screen w-screen overflow-hidden bg-black">
	<div
		class={`pointer-events-none absolute inset-[-5%] z-0 h-[110%] w-[110%] scale-[1.04] opacity-100 blur-[42px] transition-[background,opacity] duration-900 ease-in-out ${glowClass}`}
	></div>

	<Tv>
		{#if screen === 'menu'}
			<MenuScreen {menu} {selected} />
		{:else if screen === 'about'}
			<AboutScreen />
		{:else if screen === 'projects'}
			<ProjectsScreen {projects} {project} {projectLinkSelected} />
		{:else if screen === 'experience'}
			<ExperienceScreen {experiences} {experience} />
		{:else}
			<ContactScreen {contacts} {contactSelected} />
		{/if}
	</Tv>

	<Controls onNavigate={navigate} />
</main>