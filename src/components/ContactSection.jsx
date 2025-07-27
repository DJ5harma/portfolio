"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Github,
	Linkedin,
	Code2,
} from "lucide-react";
import { RESUME_LINK } from "@/constants";

const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "sunubhargav2004@gmail.com",
		href: "mailto:sunubhargav2004@gmail.com",
		color: "text-blue-500",
		bgColor: "bg-blue-500/20",
	},
	{
		icon: Phone,
		title: "Phone",
		value: "+91 8307752316",
		href: "tel:+918307752316",
		color: "text-green-500",
		bgColor: "bg-green-500/20",
	},
	{
		icon: MapPin,
		title: "Location",
		value: "Haryana, India",
		href: "#",
		color: "text-purple-500",
		bgColor: "bg-purple-500/20",
	},
];

const socialLinks = [
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com/DJ5harma",
		color: "hover:text-gray-400",
		bgColor: "bg-gray-800",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://www.linkedin.com/in/dhananjay-sharma-016550254/",
		color: "hover:text-blue-400",
		bgColor: "bg-blue-600",
	},
	{
		name: "LeetCode",
		icon: Code2,
		href: "https://leetcode.com/u/Dhananjay_Sharma_/",
		color: "hover:text-yellow-400",
		bgColor: "bg-yellow-600",
	},
];

// Animation configs
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 100, damping: 15 },
	},
};

export default function ContactSection() {
	const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

	return (
		<section className="py-20 px-4 relative overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full blur-3xl" />
			</div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					ref={ref}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					variants={itemVariants}
					className="text-center mb-16"
				>
					<h2 className="text-5xl md:text-6xl font-bold text-gradient-primary mb-6">
						Let's Connect
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto">
						Ready to collaborate on exciting projects? I'd love to hear from
						you!
					</p>
				</motion.div>

				{/* Contact Info + Socials */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={inView ? "visible" : "hidden"}
					className="max-w-4xl mx-auto space-y-12"
				>
					{/* Contact Cards */}
					<div>
						<h3 className="text-3xl font-bold text-foreground mb-8">
							Get In Touch
						</h3>
						<div className="space-y-6">
							{contactInfo.map(({ icon: Icon, ...info }, i) => (
								<motion.a
									key={info.title}
									href={info.href}
									variants={itemVariants}
									whileHover={{ scale: 1.03, x: 10 }}
									className="glass flex items-center gap-4 p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all"
								>
									<div className={`p-3 rounded-full ${info.bgColor}`}>
										<Icon className={`w-6 h-6 ${info.color}`} />
									</div>
									<div>
										<h4 className="text-lg font-semibold text-foreground">
											{info.title}
										</h4>
										<p className="text-muted-foreground">{info.value}</p>
									</div>
								</motion.a>
							))}
						</div>
					</div>

					{/* Social Links */}
					<div>
						<h4 className="text-xl font-semibold text-foreground mb-6">
							Follow Me
						</h4>
						<div className="flex gap-4">
							{socialLinks.map(({ icon: Icon, ...link }, i) => (
								<motion.a
									key={link.name}
									href={link.href}
									target="_blank"
									// rel="noopener noreferrer"
									variants={itemVariants}
									whileHover={{ scale: 1.1, rotate: 5 }}
									whileTap={{ scale: 0.95 }}
									className={`p-4 ${link.bgColor} rounded-full text-white transition-colors duration-300 ${link.color}`}
									title={link.name}
								>
									<Icon className="w-6 h-6" />
								</motion.a>
							))}
						</div>
					</div>

					{/* Availability Status */}
					<motion.div
						variants={itemVariants}
						className="glass rounded-xl p-6 border border-green-500/20"
					>
						<div className="flex items-center gap-3 mb-3">
							<span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
							<span className="text-green-400 font-semibold">
								Available for Opportunities
							</span>
						</div>
						<p className="text-muted-foreground text-sm">
							I'm currently open to full-time positions, freelance work, and
							exciting collaborations.
						</p>
					</motion.div>
				</motion.div>

				{/* Call to Action */}
				<motion.div variants={itemVariants} className="mt-20 text-center">
					<div className="glass rounded-2xl p-8 max-w-4xl mx-auto border border-purple-500/20">
						<h3 className="text-3xl font-bold text-gradient-primary mb-4 text-foreground">
							Ready to Build Something Amazing?
						</h3>
						<p className="text-xl text-muted-foreground mb-8">
							Whether you have a project in mind or just want to chat about
							technology, I’m always excited to connect.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<motion.a
								href="mailto:sunubhargav2004@gmail.com"
								target="_blank"
								// rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="btn-primary flex items-center gap-2"
							>
								<Mail className="w-5 h-5" />
								Start a Conversation
							</motion.a>
							<motion.a
								href={RESUME_LINK}
								// download
								target="_blank"
								// rel="noopener noreferrer"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="btn-secondary flex items-center gap-2"
							>
								<Send className="w-5 h-5" />
								Download Resume
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
