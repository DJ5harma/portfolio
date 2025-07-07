"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import {
	Calendar,
	Award,
	Code,
	GraduationCap,
	Briefcase,
	Star,
} from "lucide-react";

export default function ExperienceTimeline() {
	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

	const timelineData = [
		{
			year: "2026",
			title: "Graduation",
			subtitle: "B.Tech in Computer Science",
			description:
				"Completing my degree with a strong foundation in Computer Science & Engineering",
			icon: GraduationCap,
			type: "education",
			achievements: [
				"Diving into systems, software, and in-between",
				"Combining coursework with real-world experience",
				"Surviving engineering with curiosity and code",
			],
		},
		{
			year: "2025",
			title: "Advanced Projects",
			subtitle: "Full Stack Development",
			description:
				"Building complex real-time applications and collaborative tools",
			icon: Code,
			type: "project",
			achievements: [
				"Blitzit - Real-time, Collaborative, Scalable IDE",
				"DrawBuddy - Collaborative Whiteboard",
				"WebRTC Implementation",
			],
		},
		{
			year: "2024",
			title: "Skill Development",
			subtitle: "Technology Stack Expansion",
			description: "Mastering new technologies and building diverse projects",
			icon: Star,
			type: "skill",
			achievements: [
				"YouTube Clone",
				"MERN Stack Projects",
				"GitHub Contributions",
			],
		},
		{
			year: "2023",
			title: "Competitive Programming",
			subtitle: "DSA & Problem Solving",
			description:
				"Intensive focus on data structures, algorithms, and competitive programming",
			icon: Award,
			type: "achievement",
			achievements: [
				"DSA Problems",
				"LeetCode Solutions",
				"Algorithm Optimization",
			],
		},
		{
			year: "2022",
			title: "Academic Journey",
			subtitle: "B.Tech CS @ UIET",
			description: "Started my computer science journey through JEE",
			icon: Calendar,
			type: "education",
			achievements: [
				"JEE 2022: 93.21%ile",
				"University Admission",
				"Core CS Foundation",
			],
		},
	];

	const getIconColor = (type) => {
		const colors = {
			education: "text-blue-500",
			project: "text-purple-500",
			skill: "text-green-500",
			achievement: "text-yellow-500",
		};
		return colors[type] || "text-gray-500";
	};

	const getBgColor = (type) => {
		const colors = {
			education: "bg-blue-500/20",
			project: "bg-purple-500/20",
			skill: "bg-green-500/20",
			achievement: "bg-yellow-500/20",
		};
		return colors[type] || "bg-gray-500/20";
	};

	return (
		<section
			ref={containerRef}
			className="py-12 md:py-20 px-4 relative overflow-hidden"
		>
			{/* Parallax Background */}
			<motion.div style={{ y }} className="absolute inset-0 opacity-20">
				<div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-full blur-3xl" />
			</motion.div>

			<div className="relative z-10 max-w-6xl mx-auto">
				{/* Header */}
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-12 md:mb-16"
				>
					<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-primary mb-4 md:mb-6 text-foreground">
						My Timeline
					</h2>
					<p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
						A timeline of my academic and professional growth
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline Line - Hidden on mobile, visible on desktop */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500" />

					{/* Timeline Items */}
					<div className="space-y-8 md:space-y-16">
						{timelineData.map((item, index) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="relative h-48 md:h-48"
							>
								{/* Timeline Node */}
								<div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
									<motion.div
										whileHover={{ scale: 1.2 }}
										className={`w-12 h-12 rounded-full ${getBgColor(
											item.type
										)} border-4 border-white flex items-center justify-center shadow-lg`}
									>
										<item.icon
											className={`w-6 h-6 ${getIconColor(item.type)}`}
										/>
									</motion.div>
								</div>

								{/* Mobile Timeline Node */}
								<div className="md:hidden absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
									<motion.div
										whileHover={{ scale: 1.1 }}
										className={`w-10 h-10 rounded-full ${getBgColor(
											item.type
										)} border-3 border-white flex items-center justify-center shadow-lg`}
									>
										<item.icon
											className={`w-5 h-5 ${getIconColor(item.type)}`}
										/>
									</motion.div>
								</div>

								{/* Content Card */}
								<div
									className={`w-full md:absolute md:w-5/12 mt-20 md:mt-0 ${
										index % 2 === 0 ? "md:left-0 md:pr-8" : "md:right-0 md:pl-8"
									}`}
								>
									<motion.div
										whileHover={{ scale: 1.02, y: -5 }}
										className="glass rounded-2xl p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-glow-lg"
									>
										{/* Year Badge */}
										<div className="inline-block px-3 md:px-4 py-1 md:py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs md:text-sm font-bold rounded-full mb-3 md:mb-4">
											{item.year}
										</div>

										{/* Title and Subtitle */}
										<h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
											{item.title}
										</h3>
										<p className="text-purple-400 font-medium mb-2 md:mb-3 text-sm md:text-base">
											{item.subtitle}
										</p>

										{/* Description */}
										<p className="text-muted-foreground mb-3 md:mb-4 leading-relaxed text-sm md:text-base">
											{item.description}
										</p>

										{/* Achievements */}
										<div className="space-y-1 md:space-y-2">
											{item.achievements.map((achievement, i) => (
												<motion.div
													key={i}
													initial={{ opacity: 0, x: -20 }}
													animate={inView ? { opacity: 1, x: 0 } : {}}
													transition={{ delay: index * 0.2 + i * 0.1 }}
													className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-400"
												>
													<div
														className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full ${getIconColor(
															item.type
														).replace("text-", "bg-")}`}
													/>
													{achievement}
												</motion.div>
											))}
										</div>

										{/* Floating Elements - Hidden on mobile */}
										<div className="absolute inset-0 pointer-events-none hidden md:block">
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
														left: `${20 + i * 25}%`,
														top: `${30 + i * 15}%`,
													}}
												/>
											))}
										</div>
									</motion.div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Current Status */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, delay: 1 }}
					className="mt-12 md:mt-40 text-center"
				>
					<div className="glass rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-purple-500/20">
						<h3 className="text-2xl md:text-3xl font-bold text-gradient-primary mb-3 md:mb-4">
							Current Status
						</h3>
						<p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6">
							Actively seeking opportunities to contribute to innovative
							projects and continue learning
						</p>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
							{[
								{ label: "Open to Work", value: "Available", icon: Briefcase },
								{ label: "Location", value: "India", icon: Calendar },
								{ label: "Interests", value: "Full Stack, AI/ML", icon: Star },
							].map((stat, index) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
									className="text-center"
								>
									<stat.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-500 mx-auto mb-2" />
									<div className="text-base md:text-lg font-semibold text-foreground mb-1">
										{stat.value}
									</div>
									<div className="text-muted-foreground text-xs md:text-sm">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
