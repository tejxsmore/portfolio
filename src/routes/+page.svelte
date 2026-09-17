<script lang="ts">
	import './layout.css';

	type Screen = 'menu' | 'about' | 'projects' | 'experience' | 'contact';

	type LinkItem = {
		label: string;
		url: string;
	};

	type Project = {
		title: string;
		stack: string;
		links: LinkItem[];
		lines: string[];
	};

	const menu = ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];

	const projects: Project[] = [
		{
			title: 'HIREHERO',
			stack: 'SVELTEKIT / AWS / BETTER AUTH',
			links: [
				{
					label: 'GITHUB',
					url: 'https://github.com/tejxsmore/hirehero'
				},
				{
					label: 'LIVE',
					url: 'YOUR_HIREHERO_LIVE_URL'
				}
			],
			lines: [
				'FULL-STACK JOB PORTAL',
				'EMPLOYER + CANDIDATE FLOWS',
				'JOB POSTINGS + APPLICATIONS',
				'INTERVIEW SCHEDULING',
				'REAL-TIME MESSAGING',
				'FUZZY SEARCH WITH FUSE.JS',
				'SESSION-BASED AUTH',
				'DEPLOYED ON VERCEL'
			]
		},
		{
			title: 'ELEVATE',
			stack: 'GOLANG / DEEPGRAM / TWILIO',
			links: [
				{
					label: 'GITHUB',
					url: 'YOUR_ELEVATE_GITHUB_URL'
				}
			],
			lines: [
				'AI VOICE SALES PLATFORM',
				'OUTBOUND CALLS',
				'LEAD MANAGEMENT',
				'CALL HISTORY + OUTCOMES',
				'SCHEDULED CALLBACKS',
				'NATURAL-LANGUAGE SCHEDULING',
				'TIMEZONE-AWARE CALLBACKS'
			]
		},
		{
			title: 'NANOLINK',
			stack: 'RUST / AXUM',
			links: [
				{
					label: 'GITHUB',
					url: 'YOUR_NANOLINK_GITHUB_URL'
				},
				{
					label: 'LIVE',
					url: 'YOUR_NANOLINK_LIVE_URL'
				}
			],
			lines: [
				'FULL-STACK URL SHORTENER',
				'CUSTOM SHORT CODES',
				'AUTHENTICATED USERS',
				'ANONYMOUS URL SHORTENING',
				'CLICK TRACKING',
				'AUTHENTICATED DASHBOARD',
				'LINK PERFORMANCE MONITORING'
			]
		}
	];

	const experiences = [
		{
			role: 'REACT DEVELOPER INTERN',
			company: 'MEGAMIND EDUCATION',
			date: 'APR 2022 — JUN 2022',
			lines: [
				'REACT WEB APPLICATIONS',
				'RESPONSIVE INTERFACES',
				'LEGACY CODE REFACTORING',
				'MODERN DEVELOPMENT PRACTICES',
				'PERFORMANCE + MAINTAINABILITY'
			]
		}
	];

	const contacts: LinkItem[] = [
		{
			label: 'GITHUB',
			url: 'https://github.com/tejxsmore'
		},
		{
			label: 'LINKEDIN',
			url: 'https://linkedin.com/in/tejxsmore'
		},
		{
			label: 'MAIL',
			url: 'mailto:heyytejas@gmail.com'
		}
	];

	function getStored<T>(key: string, fallback: T): T {
		if (typeof window === 'undefined') {
			return fallback;
		}

		try {
			const value = sessionStorage.getItem(key);

			return value
				? (JSON.parse(value) as T)
				: fallback;
		} catch {
			return fallback;
		}
	}

	let screen = $state<Screen>(
		getStored<Screen>('portfolio-screen', 'menu')
	);

	let selected = $state(
		getStored<number>('portfolio-menu-selected', 0)
	);

	let project = $state(
		getStored<number>('portfolio-project', 0)
	);

	let projectLinkSelected = $state(
		getStored<number>('portfolio-project-link', 0)
	);

	let experience = $state(
		getStored<number>('portfolio-experience', 0)
	);

	let contactSelected = $state(
		getStored<number>('portfolio-contact-selected', 0)
	);

	$effect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		sessionStorage.setItem(
			'portfolio-screen',
			JSON.stringify(screen)
		);

		sessionStorage.setItem(
			'portfolio-menu-selected',
			JSON.stringify(selected)
		);

		sessionStorage.setItem(
			'portfolio-project',
			JSON.stringify(project)
		);

		sessionStorage.setItem(
			'portfolio-project-link',
			JSON.stringify(projectLinkSelected)
		);

		sessionStorage.setItem(
			'portfolio-experience',
			JSON.stringify(experience)
		);

		sessionStorage.setItem(
			'portfolio-contact-selected',
			JSON.stringify(contactSelected)
		);
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

	function persistNavigation() {
		if (typeof window === 'undefined') {
			return;
		}

		sessionStorage.setItem(
			'portfolio-screen',
			JSON.stringify(screen)
		);

		sessionStorage.setItem(
			'portfolio-menu-selected',
			JSON.stringify(selected)
		);

		sessionStorage.setItem(
			'portfolio-project',
			JSON.stringify(project)
		);

		sessionStorage.setItem(
			'portfolio-project-link',
			JSON.stringify(projectLinkSelected)
		);

		sessionStorage.setItem(
			'portfolio-experience',
			JSON.stringify(experience)
		);

		sessionStorage.setItem(
			'portfolio-contact-selected',
			JSON.stringify(contactSelected)
		);
	}

	function openExternal(url: string) {
		persistNavigation();

		window.open(
			url,
			'_blank',
			'noopener,noreferrer'
		);
	}

	function navigate(
		direction:
			| 'up'
			| 'down'
			| 'left'
			| 'right'
			| 'enter'
			| 'escape'
	) {
		if (direction === 'escape') {
			screen = 'menu';
			persistNavigation();
			return;
		}

		if (screen === 'menu') {
			if (direction === 'down') {
				selected = (selected + 1) % menu.length;
			}

			if (direction === 'up') {
				selected =
					(selected - 1 + menu.length) % menu.length;
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
				project =
					(project - 1 + projects.length) %
					projects.length;

				projectLinkSelected = 0;
			}

			if (
				direction === 'down' &&
				projects[project].links.length > 0
			) {
				projectLinkSelected =
					(projectLinkSelected + 1) %
					projects[project].links.length;
			}

			if (
				direction === 'up' &&
				projects[project].links.length > 0
			) {
				projectLinkSelected =
					(projectLinkSelected -
						1 +
						projects[project].links.length) %
					projects[project].links.length;
			}

			if (
				direction === 'enter' &&
				projects[project].links.length > 0
			) {
				const link =
					projects[project].links[
						projectLinkSelected
					];

				if (
					link.url &&
					!link.url.startsWith('YOUR_')
				) {
					openExternal(link.url);
				}
			}

			return;
		}

		if (screen === 'experience') {
			if (experiences.length > 1) {
				if (direction === 'right') {
					experience =
						(experience + 1) %
						experiences.length;
				}

				if (direction === 'left') {
					experience =
						(experience -
							1 +
							experiences.length) %
						experiences.length;
				}
			}

			return;
		}

		if (screen === 'contact') {
			if (direction === 'down') {
				contactSelected =
					(contactSelected + 1) %
					contacts.length;
			}

			if (direction === 'up') {
				contactSelected =
					(contactSelected -
						1 +
						contacts.length) %
					contacts.length;
			}

			if (direction === 'enter') {
				openExternal(
					contacts[contactSelected].url
				);
			}
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		const navigationKeys = [
			'ArrowUp',
			'ArrowDown',
			'ArrowLeft',
			'ArrowRight',
			'Enter',
			'Escape'
		];

		if (navigationKeys.includes(event.key)) {
			event.preventDefault();
		}

		if (event.key === 'ArrowUp') {
			navigate('up');
		}

		if (event.key === 'ArrowDown') {
			navigate('down');
		}

		if (event.key === 'ArrowLeft') {
			navigate('left');
		}

		if (event.key === 'ArrowRight') {
			navigate('right');
		}

		if (event.key === 'Enter') {
			navigate('enter');
		}

		if (event.key === 'Escape') {
			navigate('escape');
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<main class="portfolio">
	<div class={`ambient ${glowClass}`}></div>

	<div class="tv">
		<img
			src="/tv.svg"
			alt=""
			class="tv-image"
			draggable="false"
			aria-hidden="true"
		/>

		<div class="tv-screen">
			<div class="screen-content">
				{#if screen === 'menu'}
					<div class="menu-screen">
						<h1>
							TEJAS MORE<span class="cursor">_</span>
						</h1>

						<div class="menu">
							{#each menu as item, index}
								<div
									class="menu-item"
									class:selected={
										selected === index
									}
								>
									<span class="pointer">
										&gt;
									</span>

									<span>{item}</span>
								</div>
							{/each}
						</div>
					</div>

				{:else if screen === 'about'}
					<section class="page about-page">
						<div class="page-nav">
							<span>&lt; ESC</span>
						</div>

						<div class="page-title">
							TEJAS MORE
						</div>

						<div class="copy about-copy">
							<div>COMPUTER ENGINEER</div>

							<div class="gap"></div>

							<div>
								FULL-STACK APPLICATIONS
							</div>

							<div>
								BACKEND SERVICES
							</div>

							<div>
								REAL-TIME SYSTEMS
							</div>

							<div>
								AI-POWERED APPLICATIONS
							</div>
						</div>

						<div class="footer">
							JAVASCRIPT / GOLANG / JAVA<br />
							REACT / SVELTEKIT / NODE<br />
							POSTGRESQL / FIREBASE / GIT
						</div>
					</section>

				{:else if screen === 'projects'}
					<section class="page">
						<div class="page-nav">
							<span>&lt; ESC</span>

							<span class="next">
								NEXT
								<span class="chevron">›</span>
							</span>
						</div>

						<div class="page-title project-title">
							{projects[project].title}
						</div>

						<div class="stack">
							{projects[project].stack}
						</div>

						<div class="project-links">
							{#each projects[project].links as link, index}
								<div
									class="project-link"
									class:selected={
										projectLinkSelected ===
										index
									}
								>
									<span class="pointer">
										&gt;
									</span>

									<span>
										{link.label}
									</span>
								</div>
							{/each}
						</div>

						<div class="copy project-copy">
							{#each projects[project].lines as line}
								<div>{line}</div>
							{/each}
						</div>

						{#if projects.length > 1}
							<div class="project-footer">
								<span>←</span>

								<span>
									{project + 1} /
									{projects.length}
								</span>

								<span>→</span>
							</div>
						{/if}
					</section>

				{:else if screen === 'experience'}
					<section class="page">
						<div class="page-nav">
							<span>&lt; ESC</span>
						</div>

						<div class="page-title experience-title">
							{experiences[experience].role}
						</div>

						<div class="copy experience-copy">
							<div>
								{experiences[experience].company}
							</div>

							<div>
								{experiences[experience].date}
							</div>

							<div class="gap"></div>

							{#each experiences[experience].lines as line}
								<div>{line}</div>
							{/each}
						</div>
					</section>

				{:else}
					<section class="page">
						<div class="page-nav">
							<span>&lt; ESC</span>
						</div>

						<div class="page-title contact-title">
							TEJAS MORE
						</div>

						<div class="copy contact-copy">
							<div class="contact-email">
								HEYYTEJAS@GMAIL.COM
							</div>

							<div class="gap"></div>

							<div class="contact-menu">
								{#each contacts as contact, index}
									<div
										class="contact-item"
										class:selected={
											contactSelected ===
											index
										}
									>
										<span class="pointer">
											&gt;
										</span>

										<span>
											{contact.label}
										</span>
									</div>
								{/each}
							</div>
						</div>
					</section>
				{/if}
			</div>
		</div>
	</div>

	<nav
		class="tv-controls"
		aria-label="Portfolio navigation"
	>
		<button
			class="tv-button esc-button"
			type="button"
			aria-label="Escape"
			onclick={() => navigate('escape')}
		>
			ESC
		</button>

		<button
			class="tv-button icon-button"
			type="button"
			aria-label="Up"
			onclick={() => navigate('up')}
		>
			<span class="arrow arrow-up"></span>
		</button>

		<button
			class="tv-button icon-button"
			type="button"
			aria-label="Down"
			onclick={() => navigate('down')}
		>
			<span class="arrow arrow-down"></span>
		</button>

		<button
			class="tv-button icon-button"
			type="button"
			aria-label="Left"
			onclick={() => navigate('left')}
		>
			<span class="arrow arrow-left"></span>
		</button>

		<button
			class="tv-button icon-button"
			type="button"
			aria-label="Right"
			onclick={() => navigate('right')}
		>
			<span class="arrow arrow-right"></span>
		</button>

		<button
			class="tv-button enter-button"
			type="button"
			aria-label="OK"
			onclick={() => navigate('enter')}
		>
			OK
		</button>
	</nav>
</main>