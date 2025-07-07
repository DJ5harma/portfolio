"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { techList } from "@/data/techList";

export default function TechStack() {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [hoveredTech, setHoveredTech] = useState(null);
	const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.8 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15,
			},
		},
	};

	const handleTechHover = (tech, event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const x = rect.left + rect.width / 2;
		const y = rect.top - 20; // Position above the card

		setHoveredTech(tech);
		setHoverPosition({ x, y });
	};

	const handleTechLeave = () => {
		setHoveredTech(null);
	};

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background Elements */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6 text-foreground">
						Tech Arsenal
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						A comprehensive collection of technologies I've mastered and
						continue to explore
					</p>
				</motion.div>

				{/* Tech Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
				>
					{techList.map((tech, index) => (
						<motion.div
							key={tech.name}
							variants={itemVariants}
							whileHover={{
								scale: 1.05,
								z: 50,
							}}
							onHoverStart={(e) => handleTechHover(tech, e)}
							onHoverEnd={handleTechLeave}
							className="relative group"
						>
							{/* Tech Card */}
							<div className="glass rounded-2xl p-6 h-48 flex flex-col items-center justify-center transition-all duration-500 hover:shadow-glow-lg border border-border hover:border-purple-500/50">
								{/* Tech Icon */}
								<motion.div
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
									className="w-16 h-16 mb-4 relative"
								>
									<img
										src={tech.logo}
										alt={tech.name}
										className="w-full h-full object-contain filter drop-shadow-lg"
									/>
									{/* Glow Effect */}
									<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
								</motion.div>

								{/* Tech Name */}
								<h4 className="text-lg font-semibold text-foreground mb-2 text-center">
									{tech.name}
								</h4>

								{/* Tech Description (shown on hover) */}
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									whileHover={{ opacity: 1, height: "auto" }}
									className="text-sm text-muted-foreground text-center overflow-hidden"
								>
									{tech.description}
								</motion.div>
							</div>

							{/* Floating Particles */}
							<div className="absolute inset-0 pointer-events-none">
								{[...Array(3)].map((_, i) => (
									<motion.div
										key={i}
										className="absolute w-1 h-1 bg-purple-500 rounded-full"
										animate={{
											x: [0, 20, 0],
											y: [0, -20, 0],
											opacity: [0, 1, 0],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											delay: i * 0.5,
										}}
										style={{
											left: `${20 + i * 30}%`,
											top: `${30 + i * 20}%`,
										}}
									/>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Floating Tech Details - Positioned near hovered card */}
				{hoveredTech && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						style={{
							position: "fixed",
							left: hoverPosition.x,
							top: hoverPosition.y,
							transform: "translateX(-50%) translateY(-100%)",
							zIndex: 1000,
						}}
						className="glass rounded-2xl p-6 max-w-sm border border-border shadow-glow-lg"
					>
						<div className="flex items-center gap-4 mb-4">
							<img
								src={hoveredTech.logo}
								alt={hoveredTech.name}
								className="w-12 h-12 object-contain"
							/>
							<h3 className="text-2xl font-bold text-gradient-primary">
								{hoveredTech.name}
							</h3>
						</div>
						<p className="text-muted-foreground mb-4">
							{hoveredTech.description}
						</p>
						<a
							href={hoveredTech.url}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
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

						{/* Arrow pointing to the card */}
						<div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-purple-500/50" />
					</motion.div>
				)}
			</div>
		</section>
	);
}
