"use client";

import Image from "next/image";
import "@/styles/TopSeg.css";
import { useEffect, useState } from "react";

export default function TopSeg() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => setIsMounted(true), 100); // Slight delay to help paint
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div className="w-full flex justify-center">
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
				<div
					className={`w-32 h-32 md:w-[100px] md:h-[400px] relative md:rounded-none transition-opacity duration-1000 ${
						isMounted ? "opacity-100 animate-intro-2" : "opacity-0"
					}`}
				>
					<Image
						src="/images/profile_pic.jpeg"
						alt="Profile Picture"
						sizes="(max-width: 768px) 128px, 100px"
						fill
						priority={false}
						className="object-cover"
					/>
				</div>

				<div className="flex flex-1 flex-col gap-8 items-center md:items-start text-center md:text-left">
					<h1
						className={`text-4xl md:text-7xl glow-text font-bold transition-opacity duration-1000 ${
							isMounted ? "opacity-100 animate-intro-0" : "opacity-0"
						}`}
					>
						Hello!
					</h1>

					<h1
						className={`text-3xl md:text-5xl glow-text transition-opacity duration-1000 delay-300 ${
							isMounted ? "opacity-100 animate-intro-1" : "opacity-0"
						}`}
					>
						I'm <b className="glow-text">Dhananjay Sharma</b>
					</h1>

					<div
						id="intro_3"
						className={`text-xl md:text-2xl mt-4 flex flex-wrap justify-center md:justify-start gap-2 items-center glow-text`}
					>
						<span className="frontend">Frontend</span>
						<span className="plus">+</span>
						<span className="backend">Backend</span>
						<span className="equals">=</span>
						<span className="fsd font-bold text-2xl">Full Stack Dev</span>
					</div>

					<div
						className={`flex w-full gap-4 justify-around transition-opacity duration-1000 delay-500 ${
							isMounted ? "opacity-100" : "opacity-0"
						}`}
					>
						{socialLinks.map(({ href, imgSrc, label }) => (
							<a
								key={label}
								className="flex items-center gap-2"
								target="_blank"
								// rel="noopener noreferrer"
								href={href}
							>
								<Image
									src={imgSrc}
									alt={`${label} logo`}
									width={40}
									height={40}
									className="rounded-full bg-card"
								/>
								<span className="hidden md:block">{label}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

const socialLinks = [
	{
		href: "https://github.com/DJ5harma",
		imgSrc: "/logos/github.svg",
		label: "GitHub",
	},
	{
		href: "https://www.linkedin.com/in/dhananjay-sharma-016550254/",
		imgSrc: "/logos/linkedin.svg",
		label: "LinkedIn",
	},
	{
		href: "https://leetcode.com/u/Dhananjay_Sharma_/",
		imgSrc: "/logos/leetcode.svg",
		label: "Leetcode",
	},
];
