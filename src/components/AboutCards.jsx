"use client";

import "@/styles/AboutCards.css";

const aboutData = [
	{
		title: "Frontend",
		points: [
			"Crafted responsive and dynamic UIs using React, Next.js, and SvelteKit",
			"Built complex interactive experiences with Canvas, Konva, and custom components",
			"Focused on performance, accessibility, and modular design across 20+ projects",
		],
	},
	{
		title: "Backend",
		points: [
			"Developed scalable APIs and microservices with Node.js and Express",
			"Implemented real-time systems with Socket.IO, Redis Pub/Sub, and WebRTC",
			"Handled authentication, encryption, and Docker-based deployments",
		],
	},
	{
		title: "DSA & Core Computer Science",
		points: [
			"Solved various types of questions across Leetcode & other sites",
			"Strong foundation in OS, DBMS, CN, OOP, Automata etc.",
			"Utilized problem solving patterns in personal projects.",
		],
	},
	{
		title: "Education",
		points: [
			"B.Tech. CS @ UIET, Kurukshetra University (2022 - 2026)",
			"CGPA: 7.0 (as of 6th sem) • JEE Mains 2022: 93.2%ile",
			"String foundation in DSA, OS, OOP, CN, DBMS, Compiler Design",
		],
	},
];

export default function AboutCards() {
	return (
		<div className="w-full py-12 px-4 md:px-16 flex flex-col items-center gap-10">
			<h2 className="text-4xl md:text-5xl font-bold glow-text">
				{":)"} About Me
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
				{aboutData.map((card, idx) => (
					<div key={idx} className="card-container fade-in">
						<h3 className="text-2xl font-semibold mb-3 glow-text">
							{card.title}
						</h3>
						<ul className="list-disc list-inside text-base text-gray-300">
							{card.points.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}
