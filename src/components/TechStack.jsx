"use client";

import { useInView } from "react-intersection-observer";
import { useState, useRef, useEffect } from "react";
import { techList } from "@/data/techList";
import Image from "next/image";

export default function TechStack() {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [hoveredTech, setHoveredTech] = useState(null);
	const hoverTimeout = useRef(null);

	const handleTechHover = (tech) => {
		clearTimeout(hoverTimeout.current);
		hoverTimeout.current = setTimeout(() => {
			setHoveredTech(tech);
		}, 100);
	};

	const handleTechLeave = () => {
		clearTimeout(hoverTimeout.current);
		setHoveredTech(null);
	};

	useEffect(() => {
		return () => clearTimeout(hoverTimeout.current);
	}, []);

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background Gradient Blur Bubbles */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header */}
				<div
					ref={ref}
					className={`text-center mb-16 transition-opacity duration-1000 ${
						inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
					}`}
				>
					<h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6 text-foreground">
						Tech Arsenal
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						A comprehensive collection of technologies I've mastered and
						continue to explore
					</p>
				</div>

				{/* Tech Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
					{techList.map((tech) => (
						<div
							key={tech.name}
							onMouseEnter={() => handleTechHover(tech)}
							onMouseLeave={handleTechLeave}
							className="relative group rounded-2xl p-6 h-48 flex flex-col items-center justify-center bg-glass transition-all duration-300 border border-border hover:border-purple-500/50 hover:shadow-glow"
						>
							<div className="w-16 h-16 mb-2 relative">
								<Image
									src={tech.logo}
									alt={tech.name}
									width={64}
									height={64}
									className="object-contain filter drop-shadow"
								/>
							</div>

							<h4 className="text-lg font-semibold text-foreground text-center">
								{tech.name}
							</h4>

							<p className="text-xs text-muted-foreground text-center mt-1 hidden sm:block line-clamp-2">
								{tech.description}
							</p>
						</div>
					))}
				</div>

				{/* Optional Hover Preview (if you MUST keep it) */}
				{hoveredTech && (
					<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-glass p-4 rounded-xl shadow-lg border border-border z-50 w-[90%] max-w-md transition-all">
						<div className="flex items-center gap-3">
							<Image
								src={hoveredTech.logo}
								alt={hoveredTech.name}
								width={40}
								height={40}
								className="object-contain"
							/>
							<div>
								<h3 className="text-xl font-bold text-gradient-primary">
									{hoveredTech.name}
								</h3>
								<p className="text-sm text-muted-foreground">
									{hoveredTech.description}
								</p>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
