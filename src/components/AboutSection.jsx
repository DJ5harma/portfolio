import React from "react";

export default function AboutSection() {
	return (
		<section id="about" className="py-20 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
						About Me
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						A passionate full-stack developer with expertise in modern web
						technologies and an urge to create exceptional user experiences.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="space-y-6">
						<div className="glass rounded-2xl p-6 border border-border">
							<h3 className="text-2xl font-bold text-gradient-secondary mb-4">
								Frontend Expertise
							</h3>
							<ul className="space-y-3 text-muted-foreground">
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-purple-500 rounded-full" />
									Crafted responsive & dynamic UIs using React, Next.js
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-purple-500 rounded-full" />
									Built interactive experiences with Canvas API, Konva
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-purple-500 rounded-full" />
									Focused on performance, accessibility, & modular design
								</li>
							</ul>
						</div>

						<div className="glass rounded-2xl p-6 border border-border">
							<h3 className="text-2xl font-bold text-gradient-accent mb-4">
								Backend Development
							</h3>
							<ul className="space-y-3 text-muted-foreground">
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full" />
									Developed scalable APIs and microservices with Node.js
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full" />
									Implemented real-time systems with WebSockets & Redis Pub/Sub
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full" />
									Authentication, encryption, file handling, & Docker-based
									deployments
								</li>
							</ul>
						</div>
					</div>

					<div className="space-y-6">
						<div className="glass rounded-2xl p-6 border border-border">
							<h3 className="text-2xl font-bold text-gradient-primary mb-4">
								Problem Solving
							</h3>
							<ul className="space-y-3 text-muted-foreground">
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-green-500 rounded-full" />
									Solved 650+ questions across Leetcode & other competitive
									platforms
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-green-500 rounded-full" />
									Strong foundation in Data Structures and Algorithms
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-green-500 rounded-full" />
									1000+ GitHub commits
								</li>
							</ul>
						</div>

						<div className="glass rounded-2xl p-6 border border-border">
							<h3 className="text-2xl font-bold text-gradient-secondary mb-4">
								Education
							</h3>
							<ul className="space-y-3 text-muted-foreground">
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-yellow-500 rounded-full" />
									B.Tech. CS @ UIET, Kurukshetra University (2022 - 2026)
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-yellow-500 rounded-full" />
									CGPA: 7.0 • JEE 2022: 93.2%ile
								</li>
								<li className="flex items-center gap-3">
									<span className="w-2 h-2 bg-yellow-500 rounded-full" />
									Core subjects: DSA, OS, OOP, CN, DBMS, Compiler Design
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
