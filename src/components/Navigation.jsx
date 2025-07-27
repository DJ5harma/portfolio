"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import { RESUME_LINK } from "@/constants";

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isDark, setIsDark] = useState(true);
	const [isScrolled, setIsScrolled] = useState(false);

	const { scrollY } = useScroll();
	const backgroundColor = useTransform(
		scrollY,
		[0, 100],
		[
			isDark ? "rgba(2, 6, 23, 0)" : "rgba(255, 255, 255, 0)",
			isDark ? "rgba(2, 6, 23, 0.95)" : "rgba(255, 255, 255, 0.95)",
		]
	);

	// Initialize theme from localStorage or system preference
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (savedTheme) {
			setIsDark(savedTheme === "dark");
			applyTheme(savedTheme === "dark");
		} else {
			// Default to dark mode instead of system preference
			setIsDark(true);
			applyTheme(true);
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const applyTheme = (isDarkMode) => {
		const root = document.documentElement;

		if (isDarkMode) {
			// Dark theme
			root.setAttribute("data-theme", "dark");
			root.removeAttribute("data-theme");
		} else {
			// Light theme
			root.setAttribute("data-theme", "light");
		}
	};

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Experience", href: "#experience" },
		{ name: "Contact", href: "#contact" },
	];

	const scrollToSection = (href) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}

		// Delay closing the mobile nav to ensure scrolling happens
		setTimeout(() => setIsOpen(false), 300); // Adjust timing as needed
	};

	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);
		applyTheme(newTheme);
		localStorage.setItem("theme", newTheme ? "dark" : "light");
	};

	return (
		<motion.nav
			style={{ backgroundColor }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "backdrop-blur-md border-b border-white/10" : ""
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center"
					>
						<a
							href="#home"
							onClick={(e) => {
								e.preventDefault();
								scrollToSection("#home");
							}}
							className="text-2xl font-bold text-gradient-primary hover:scale-105 transition-transform duration-300"
						>
							DS
						</a>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navItems.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
							>
								{item.name}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
							</motion.a>
						))}
					</div>

					{/* Desktop Actions */}
					<div className="hidden md:flex items-center space-x-4">
						{/* Theme Toggle */}
						<motion.button
							onClick={toggleTheme}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="p-2 rounded-lg glass hover:shadow-glow transition-all duration-300"
							title="Toggle theme"
						>
							{isDark ? (
								<Sun className="w-5 h-5 text-yellow-400" />
							) : (
								<Moon className="w-5 h-5 text-blue-400" />
							)}
						</motion.button>

						{/* Resume Download */}
						<motion.a
							href={RESUME_LINK}
							// download
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="btn-primary flex items-center gap-2 text-sm"
						>
							<Download className="w-4 h-4" />
							Resume
						</motion.a>
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<motion.button
							onClick={() => setIsOpen(!isOpen)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="p-2 rounded-lg glass hover:shadow-glow transition-all duration-300"
						>
							{isOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</motion.button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{
						opacity: isOpen ? 1 : 0,
						height: isOpen ? "auto" : 0,
					}}
					transition={{ duration: 0.3 }}
					className="md:hidden overflow-hidden"
				>
					<div className="glass rounded-xl mt-4 p-4 space-y-4 border border-white/10">
						{navItems.map((item, index) => (
							<motion.a
								key={item.name}
								href={item.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.href);
								}}
								initial={{ opacity: 0, x: -20 }}
								animate={isOpen ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								className="block text-muted-foreground hover:text-foreground transition-colors duration-300 py-2 border-b border-border last:border-b-0"
							>
								{item.name}
							</motion.a>
						))}

						{/* Mobile Actions */}
						<div className="flex items-center justify-between pt-4">
							<motion.button
								onClick={toggleTheme}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="p-2 rounded-lg glass hover:shadow-glow transition-all duration-300"
							>
								{isDark ? (
									<Sun className="w-5 h-5 text-yellow-400" />
								) : (
									<Moon className="w-5 h-5 text-blue-400" />
								)}
							</motion.button>

							<motion.a
								href={RESUME_LINK}
								// download
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="btn-primary flex items-center gap-2 text-sm"
							>
								<Download className="w-4 h-4" />
								Resume
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.nav>
	);
}
