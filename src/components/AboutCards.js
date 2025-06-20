"use client";

import "./AboutCards.css";

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
			"Implemented real-time systems with WebSockets, Redis Pub/Sub, and WebRTC",
			"Handled authentication, encryption, file handling, and Docker-based deployments",
		],
	},
	{
		title: "DSA & Competitive",
		points: [
			"Solved 600+ questions across Leetcode & other sites",
			"Strong foundation in OS, DBMS, CN, OOP, Automata etc.",
			"1000+ GitHub contributions and active open-source dev",
		],
	},
	{
		title: "Education",
		points: [
			"B.Tech. CS @ UIET, Kurukshetra University (2022 - 2026)",
			"CGPA: 7.0 • JEE 2022: 93.2%ile",
			"Core subjects: DSA, OS, OOP, CN, DBMS, Compiler Design",
		],
	},
];

export default function AboutCards() {
	return (
		<div className="w-full py-12 px-4 md:px-16 flex flex-col items-center gap-10">
			<h2 className="text-4xl md:text-5xl font-bold glow-text">About Me</h2>
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
