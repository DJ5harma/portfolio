"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	useEffect,
	useState,
	useCallback,
	useRef,
	useLayoutEffect,
} from "react";
import { techList } from "@/data/techList";

function TechPopup({ tech, position, onHover, onLeave }) {
	const popupRef = useRef(null);
	const [adjustedPos, setAdjustedPos] = useState(position);

	useLayoutEffect(() => {
		if (!popupRef.current) return;

		const popup = popupRef.current;
		const rect = popup.getBoundingClientRect();
		const padding = 16;

		let x = position.x;
		let y = position.y;

		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		if (x + rect.width + padding > viewportWidth) {
			x = viewportWidth - rect.width - padding;
		}

		if (y + rect.height + padding > viewportHeight) {
			y = viewportHeight - rect.height - padding;
		}

		if (y < padding) {
			y = padding;
		}

		if (x < padding) {
			x = padding;
		}

		setAdjustedPos({ x, y });
	}, [position]);

	if (!tech) return null;

	return (
		<motion.div
			ref={popupRef}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.2 }}
			onMouseEnter={onHover}
			onMouseLeave={onLeave}
			style={{
				position: "fixed",
				left: adjustedPos.x,
				top: adjustedPos.y,
				zIndex: 1000,
			}}
			className="bg-gradient-to-br from-[#1f1f2b]/80 to-[#2b2b40]/80 backdrop-blur-xl rounded-2xl p-6 max-w-sm border border-white/10 shadow-[0_4px_40px_rgba(124,58,237,0.3)] transition-all duration-300"
		>
			<div className="flex items-center gap-4 mb-5">
				<div className="w-16 h-16 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center shadow-inner shadow-purple-500/10">
					<img
						src={tech.logo}
						alt={tech.name}
						className="w-full h-full object-contain rounded-xl p-1 bg-white shadow-md"
					/>
				</div>
				<div>
					<h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
						{tech.name}
					</h3>
					<div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-1 animate-pulse" />
				</div>
			</div>

			<p className="text-sm text-neutral-300 leading-relaxed mb-5">
				{tech.description}
			</p>
			<a
				href={tech.url}
				target="_blank"
				// rel="noopener noreferrer"
				className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg transition-all duration-300"
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
	);
}

export default function InteractiveTechTree() {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	const [hoveredTech, setHoveredTech] = useState(null);
	const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const handleTechHover = useCallback((tech, event) => {
		if (!event) return;

		const popupWidth = 320;
		const popupHeight = 240;
		const padding = 20;

		const { clientX, clientY } = event;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		let x = clientX;
		let y = clientY;

		// Adjust X if too close to edges
		if (x < popupWidth / 2 + padding) {
			x = popupWidth / 2 + padding;
		} else if (x > viewportWidth - popupWidth / 2 - padding) {
			x = viewportWidth - popupWidth / 2 - padding;
		}

		// Adjust Y if popup goes above or below the screen
		if (y < popupHeight + padding) {
			y = clientY + 30;
		} else if (y + padding > viewportHeight - popupHeight / 2) {
			y = clientY - popupHeight - 30;
		} else {
			y = clientY - 30;
		}

		setHoveredTech(tech);
		setHoverPosition({ x, y });
		setIsHovering(true);
	}, []);

	const handleLeave = useCallback(() => setIsHovering(false), []);
	const handleEnter = useCallback(() => setIsHovering(true), []);

	useEffect(() => {
		if (!isHovering) {
			const timeout = setTimeout(() => setHoveredTech(null), 200);
			return () => clearTimeout(timeout);
		}
	}, [isHovering]);

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background */}
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

				{/* Grid */}
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
							onMouseLeave={handleLeave}
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

				{/* Popup */}
				<TechPopup
					tech={hoveredTech}
					position={hoverPosition}
					onHover={handleEnter}
					onLeave={handleLeave}
				/>
			</div>
		</section>
	);
}
