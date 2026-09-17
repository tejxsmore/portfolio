export type LinkItem = {
	label: string;
	url: string;
};

export type Project = {
	title: string;
	stack: string;
	links: LinkItem[];
	lines: string[];
};

export type Experience = {
	role: string;
	company: string;
	date: string;
	lines: string[];
};

export const menu = ['ABOUT', 'PROJECTS', 'EXPERIENCE', 'CONTACT'];

export const projects: Project[] = [
	{
		title: 'HIREHERO',
		stack: 'SVELTEKIT / AWS / BETTER AUTH',
		links: [
			{ label: 'GITHUB', url: 'https://github.com/tejxsmore/hirehero' },
			{ label: 'LIVE', url: 'https://hirehero.tejasmore.in' },
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
			{ label: 'GITHUB', url: 'https://github.com/tejxsmore/elevate' },
			{ label: 'YOUTUBE', url: 'https://youtube.com' }
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
			{ label: 'GITHUB', url: 'https://github.com/tejxsmore/nanolink' },
			{ label: 'LIVE', url: 'https://nanolink.tejasmore.in' },
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
	},
	{
		title: 'FLOCAL',
		stack: 'GOLANG / DEEPGRAM / OPENAI',
		links: [
			{ label: 'GITHUB', url: 'https://github.com/tejxsmore/flocal' },
			{ label: 'YOUTUBE', url: 'https://youtube.com' }
		],
		lines: [
			'AI SPEECH FLUENCY COACH',
			'SCROLL WHEEL FOR RANDOM TOPIC',
			'CATEGORY FILTERS',
			'BUSINESS / GENERAL / EDUCATION',
			'HEALTH / ENVIRONMENT',
			'PIN TOPIC + PREP TIME',
			'60 SECOND TIMED SPEAKING',
			'AI SCORED SPEECH',
			'MISTAKES HIGHLIGHTED',
			'IMPROVEMENT TIPS'
		]
	}
];

export const experiences: Experience[] = [
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

export const contacts: LinkItem[] = [
	{ label: 'GITHUB', url: 'https://github.com/tejxsmore' },
	{ label: 'LINKEDIN', url: 'https://linkedin.com/in/tejxsmore' },
	{ label: 'MAIL', url: 'mailto:heyytejas@gmail.com' }
];
