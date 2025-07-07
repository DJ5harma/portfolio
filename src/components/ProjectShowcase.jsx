"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { projects } from "@/data/projects";
import { Github, Eye } from "lucide-react";

export default function ProjectShowcase() {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const [selectedProject, setSelectedProject] = useState(null);
	const [hoveredProject, setHoveredProject] = useState(null);
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 100, rotateX: -15 },
		visible: {
			opacity: 1,
			y: 0,
			rotateX: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 15,
			},
		},
	};

	const getProjectImage = (projectName) => {
		// You can add actual project images here
		const images = {
			Blitzit: "/images/Blitzit.png",
			DrawBuddy: "/images/DrawBuddy.jpeg",
			"YouTube Clone": "/images/youtube_clone.jpeg",
		};
		return (
			images[projectName] ||
			"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
		);
	};

	return (
		<section ref={containerRef} className="py-20 px-4 relative overflow-hidden">
			{/* Parallax Background */}
			<motion.div style={{ y }} className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full blur-3xl" />
			</motion.div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
						Featured Projects
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Sharing my best projects, each with its own unique story
					</p>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.name}
							variants={cardVariants}
							whileHover={{
								scale: 1.02,
								rotateY: 5,
								z: 50,
							}}
							onHoverStart={() => setHoveredProject(project.name)}
							onHoverEnd={() => setHoveredProject(null)}
							className="group relative"
						>
							{/* Project Card */}
							<div className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-glow-lg">
								{/* Project Image */}
								<div className="relative h-64 overflow-hidden">
									<img
										src={getProjectImage(project.name)}
										alt={project.name}
										className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

									{/* Overlay Content */}
									<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="flex gap-4">
											<motion.button
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
												className="p-3 bg-accent rounded-full text-accent-foreground hover:bg-accent/80 transition-colors"
												onClick={() => setSelectedProject(project)}
											>
												<Eye className="w-5 h-5" />
											</motion.button>
											{project.github && (
												<motion.a
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													whileHover={{ scale: 1.1 }}
													whileTap={{ scale: 0.9 }}
													className="p-3 bg-muted rounded-full text-foreground hover:bg-muted-foreground/80 transition-colors"
												>
													<Github className="w-5 h-5" />
												</motion.a>
											)}
										</div>
									</div>

									{/* Tech Stack Badges */}
									<div className="absolute top-4 left-4 flex flex-wrap gap-2">
										{project.techStack.slice(0, 3).map((tech, i) => (
											<motion.span
												key={tech}
												initial={{ opacity: 0, scale: 0 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ delay: i * 0.1 }}
												className="px-2 py-1 bg-accent/80 backdrop-blur-sm text-accent-foreground text-xs rounded-full"
											>
												{tech}
											</motion.span>
										))}
										{project.techStack.length > 3 && (
											<span className="px-2 py-1 bg-muted/80 backdrop-blur-sm text-foreground text-xs rounded-full">
												+{project.techStack.length - 3}
											</span>
										)}
									</div>
								</div>

								{/* Project Content */}
								<div className="p-6">
									<div className="flex items-start justify-between mb-4">
										<h3 className="text-2xl font-bold text-foreground group-hover:text-gradient-primary transition-all duration-300">
											{project.name}
										</h3>
										<span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
											{project.period}
										</span>
									</div>

									<ul className="space-y-2 mb-6">
										{project.summary.slice(0, 3).map((point, i) => (
											<motion.li
												key={i}
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: i * 0.1 }}
												className="text-muted-foreground text-sm flex items-start gap-2"
											>
												<span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												{point}
											</motion.li>
										))}
									</ul>

									{/* Action Buttons */}
									<div className="flex gap-3">
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											onClick={() => setSelectedProject(project)}
											className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
										>
											<Eye className="w-4 h-4" />
											View Details
										</motion.button>
										{project.github && (
											<motion.a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
												className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2"
											>
												<Github className="w-4 h-4" />
												Code
											</motion.a>
										)}
									</div>
								</div>
							</div>

							{/* Floating Elements */}
							<div className="absolute inset-0 pointer-events-none">
								{[...Array(5)].map((_, i) => (
									<motion.div
										key={i}
										className="absolute w-1 h-1 bg-purple-500 rounded-full"
										animate={{
											x: [0, 30, 0],
											y: [0, -30, 0],
											opacity: [0, 1, 0],
										}}
										transition={{
											duration: 4,
											repeat: Infinity,
											delay: i * 0.8,
										}}
										style={{
											left: `${20 + i * 15}%`,
											top: `${40 + i * 10}%`,
										}}
									/>
								))}
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Project Modal */}
			{selectedProject && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
					onClick={() => setSelectedProject(null)}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="p-8">
							<div className="flex items-start justify-between mb-6">
								<h2 className="text-3xl font-bold text-gradient-primary">
									{selectedProject.name}
								</h2>
								<button
									onClick={() => setSelectedProject(null)}
									className="text-gray-400 hover:text-white transition-colors"
								>
									✕
								</button>
							</div>

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div>
									<img
										src={getProjectImage(selectedProject.name)}
										alt={selectedProject.name}
										className="w-full h-64 object-cover rounded-lg mb-6"
									/>
									<div className="flex flex-wrap gap-2 mb-6">
										{selectedProject.techStack.map((tech) => (
											<span
												key={tech}
												className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
											>
												{tech}
											</span>
										))}
									</div>
								</div>

								<div>
									<h3 className="text-xl font-semibold text-foreground mb-4">
										Project Overview
									</h3>
									<ul className="space-y-3 mb-6">
										{selectedProject.summary.map((point, i) => (
											<li
												key={i}
												className="text-muted-foreground flex items-start gap-3"
											>
												<span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
												{point}
											</li>
										))}
									</ul>

									<div className="flex gap-4">
										{selectedProject.github && (
											<a
												href={selectedProject.github}
												target="_blank"
												rel="noopener noreferrer"
												className="btn-primary flex items-center gap-2"
											>
												<Github className="w-4 h-4" />
												View Code
											</a>
										)}
										{/* <button className="btn-secondary flex items-center gap-2">
                      <Play className="w-4 h-4" />
                      Live Demo
                    </button> */}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</section>
	);
}
