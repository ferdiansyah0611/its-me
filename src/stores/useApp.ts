import { create, UseBoundStore, StoreApi } from "zustand";

export interface projectInterface {
	title: string;
	description: string;
	stack: string[];
	link: string[];
	isPrivate?: boolean | undefined;
}
export interface useAppInterface {
	profiles: {
		name: string;
		description: string;
		born: string;
		role: string;
		contacts: {
			email: string;
			instagram: string;
			facebook: string;
			whatsapp: string;
		};
	};
	skills: string[];
	projects: {
		title: string;
		description: string;
		stack: string[];
		link: string[];
		isPrivate?: boolean;
	}[];
	certificates: {
		title: string;
		file: string;
	}[];
	study: {
		name: string;
		year: string;
	}[];
	experience: {
		company: string;
		role: string;
		during: string;
		task: string[];
	}[];
}

const useApp: UseBoundStore<StoreApi<useAppInterface>> = create((_set) => ({
	profiles: {
		name: "Ferdiansyah",
		description:
			"I have experience in developing a website. I have a hobby that is learning programming languages. Such as PHP, Python, and TypeScript languages. The location where I live is in South Tangerang City, Banten, Indonesia.",
		born: "20 September 2002",
		role: "Frontend Developer, UI/UX Designer",
		contacts: {
			email: "mailto:ferdif9996@gmail.com",
			instagram: "https://www.instagram.com/ferdy.shelby",
			facebook: "https://web.facebook.com/profile.php?id=100009125269386",
			whatsapp: "https://wa.me/085814546620",
		},
	},
	skills: ["HTML5", "CSS", "Javascript", "React Js", "Vue Js", "Zustand", "TailwindCSS"],
	projects: [
		makeProject(
			"Tech Messenger",
			"Tech Messenger is a web chat application with several features such as Personal Chat, Group Chat, Video Call, Story, Contact, and Marketplace.",
			[
				"React Js",
				"Material UI",
				"Tailwind CSS",
				"Firebase",
				"Express Js",
				"Mongodb"
			],
			["https://tech-messenger-0611.web.app"],
			true,
		),
		makeProject(
			"FE Builder",
			"a frontend website builder with just drag and drop. Supports tailwind css, flowbite, daisy ui and several components that I made myself. You can also write code, export it with static,json,react.",
			["React Js", "Tailwind CSS"],
			["https://fe-builder.vercel.app"],
			true,
		),
		makeProject(
			"Wedding Tech",
			"Wedding Tech is a online wedding invitation platform",
			["React Js", "Material UI", "Firebase"],
			["https://wedding-tech.web.app"],
			true,
		),
		makeProject(
			"Relationship Web",
			"A site about a relationship with lovers.",
			["React Js", "Sass", "Tailwind CSS"],
			["https://ferdisafina.web.app"],
			true,
		),
		makeProject(
			"Ferdiansyah Blog",
			"Ferdiansyah Blog is a website for creating blog content and providing an API to access the API with a registered url.",
			["Express Js", "Sequelize", "UI Kit"],
			["https://ferdiansyah-blog.herokuapp.com"],
			true,
		),
		makeProject(
			"System Information School",
			"The School Information System is a website that is useful for managing school-based data such as student data, teachers, classes, subjects, schools and can import/export excel data.",
			["Laravel", "Vue Js", "Bootstrap", "Mysql"],
			[
				"https://github.com/ferdiansyah0611/system_information_school",
				"http://system-school-laravel.herokuapp.com",
			],
		),
		makeProject(
			"Spotify Clone",
			"Spotify Clone is a website designed as closely as possible to the Spotify site.",
			["React Js", "Tailwind CSS", "Spotify API"],
			["https://github.com/ferdiansyah0611/clone-spotify", "https://clone-spotify-kappa.vercel.app"],
		),
		makeProject(
			"Blog Multi User",
			"Multi User Blog is a website with a feature to create a blog for all registered users.",
			["Codeigniter 4", "Materialize CSS", "Mysql"],
			["https://github.com/ferdiansyah0611/blog-multi-user"],
		),
		makeProject(
			"Windows Clone",
			"Windows Clone is a web designed as closely as possible to the Windows 10 operating system.",
			["React Js", "Tailwind CSS"],
			["https://csb-3utk7.vercel.app"],
		),
		makeProject(
			"Inventory Management",
			"Inventory management is a website for inventory management such as product, order, customer, user, category, brand, monthly or yearly daily reports, and income.",
			["Codeigniter 4", "Mysql"],
			["https://github.com/ferdiansyah0611/inventory"],
		),
		makeProject(
			"Library Management",
			"Library management is a website for the management of library books such as books, e-books, borrow books, and users.",
			["Codeigniter 4", "Mysql"],
			["https://github.com/ferdiansyah0611/book-management"],
		),
		makeProject(
			"Landing Page",
			"A landing page site.",
			["Vue Js", "Tailwind CSS", "Sass", "Quasar"],
			["http://fairy-technology.web.app"],
		),
		makeProject(
			"Landing Page 2",
			"A landing page site.",
			["Vue Js", "Sass"],
			["https://github.com/ferdiansyah0611/my-vite-app", "https://practical-nobel-3c7661.netlify.app"],
		),
		makeProject(
			"Stackoverflow Clone",
			"Stackoverflow clone is simple question & answer feature and with customize ui like a stackoverflow.",
			["React Js", "Sass", "Tailwind CSS", "Express Js", "Mongodb"],
			["https://gitlab.com/stuckoverflow", "https://stuckoverflow-fe.vercel.app"],
		),
	],
	certificates: [],
	study: [
		makeStudy("SMK Letris Indonesia 1 - TKJ", "2018 - 2021"),
		makeStudy("MTs Unwaanunnajah", "2015 - 2018"),
		makeStudy("SDN Jombang 4", "2009 - 2015"),
	],
	experience: [
		makeExperience("Google INC", "CEO", "2018 - Now", ["Watch Movies"]),
		makeExperience("OpenAI", "AI Engineer", "2020 - Now", ["Train Data"]),
	],
}));

function makeStudy(name: string, year: string) {
	return { name, year };
}
function makeExperience(company: string, role: string, during: string, task: string[]) {
	return { company, role, during, task };
}
function makeProject(title: string, description: string, stack: string[], link: string[], isPrivate?: boolean) {
	return { title, description, stack, link, isPrivate };
}

export default useApp;