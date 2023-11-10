import { create } from "zustand";

const useApp = create((_set) => ({
	profiles: {
		name: "Ferdiansyah",
		description:
			"I have experience in developing a website. I have a hobby that is learning programming languages. Such as PHP, Python, and TypeScript languages. The location where I live is in South Tangerang City, Banten, Indonesia.",
		born: "20 September 2002",
		contacts: {
			email: "mailto:ferdif9996@gmail.com",
			instagram: "https://www.instagram.com/fairy.technology",
			facebook: "https://web.facebook.com/profile.php?id=100009125269386",
			whatsapp: "https://wa.me/085814546620",
		},
	},
	skills: [],
	project: [],
	certificate: [],
	study: [
		makeStudy("SMK Letris Indonesia 1 - TKJ", "2018 - 2021"),
		makeStudy("MTs Unwaanunnajah", "2015 - 2018"),
		makeStudy("SDN Jombang 4", "2009 - 2015"),
	],
	experience: [
		"Able to use HTML, CSS, SASS, Javascript, and Typescript",
		"Good understanding of sql and nosql",
		"Able to work with a team and able to integrate API",
		"Can use figma to make website design prototypes",
		"Can use canva to design social media",
	],
}));

function makeStudy(name: string, year: string) {
	return ({ name, year });
}

export default useApp;