"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { techList } from "@/data/techList";

export default function InteractiveTechTree() {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [hoveredTech, setHoveredTech] = useState(null);
	const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false); // tracks both tech and popup hover

	const handleTechHover = (tech, event) => {
		if (!event) return;

		const x = event.clientX;
		const y = event.clientY;

		setHoveredTech(tech);
		setHoverPosition({ x, y });
		setIsHovering(true);
	};

	const handleTechLeave = () => {
		setIsHovering(false);
	};

	const handlePopupEnter = () => setIsHovering(true);
	const handlePopupLeave = () => setIsHovering(false);

	useEffect(() => {
		if (!isHovering) {
			const timeout = setTimeout(() => {
				setHoveredTech(null);
			}, 200); // gives you time to enter the popup

			return () => clearTimeout(timeout);
		}
	}, [isHovering]);

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
				<div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
						Tech Arsenal
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						A comprehensive collection of technologies I've explored
					</p>
				</motion.div>

				{/* Tech Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
					{techList.map((tech, index) => (
						<motion.div
							key={tech.name}
							initial={{ opacity: 0, y: 30 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{
								scale: 1.05,
								y: -5,
								transition: { duration: 0.2 },
							}}
							onMouseEnter={(e) => handleTechHover(tech, e)}
							onMouseLeave={handleTechLeave}
							className="relative group cursor-pointer"
						>
							<div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 h-48 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-2xl border border-white/20 hover:border-purple-500/50 overflow-hidden">
								<div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
								<div className="w-20 h-20 mb-4 relative z-10">
									<img
										src={tech.logo}
										alt={tech.name}
										className="w-full h-full object-contain drop-shadow-lg bg-white p-1 rounded-xl"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								</div>
								<h4 className="text-lg font-bold text-foreground mb-2 text-center z-10 relative">
									{tech.name}
								</h4>
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
							</div>
						</motion.div>
					))}
				</div>

				{/* Floating Popup */}
				{hoveredTech && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: 20 }}
						transition={{ duration: 0.2 }}
						onMouseEnter={handlePopupEnter}
						onMouseLeave={handlePopupLeave}
						style={{
							position: "fixed",
							left: hoverPosition.x,
							top: hoverPosition.y,
							transform: "translateX(-50%) translateY(-100%)",
							zIndex: 1000,
						}}
						className="bg-gradient-to-br from-neutral-950 to-neutral-900 backdrop-blur-xl rounded-2xl p-8 max-w-sm border border-neutral-800 shadow-2xl"
					>
						<div className="flex items-center gap-4 mb-6">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
								<img
									src={hoveredTech.logo}
									alt={hoveredTech.name}
									className="w-full h-full object-contain rounded-xl p-1 bg-white"
								/>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-gradient-primary">
									{hoveredTech.name}
								</h3>
								<div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2" />
							</div>
						</div>

						<p className="text-muted-foreground mb-6 leading-relaxed text-sm">
							{hoveredTech.description}
						</p>

						<a
							href={hoveredTech.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
						>
							Learn More
							<svg
								className="w-4 h-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
								/>
							</svg>
						</a>
					</motion.div>
				)}
			</div>
		</section>
	);
}
