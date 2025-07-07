"use client";

import Image from "next/image";
import "@/styles/TopSeg.css";

export default function TopSeg() {
	return (
		<div className="w-full flex justify-center">
			<div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 overflow-hidden">
				<div
					className="w-32 h-32 md:w-[100px] md:h-[400px] relative overflow-hidden md:rounded-none opacity-0"
					style={{ animation: "intro_2 2s forwards 2.5s" }}
				>
					<Image
						src="/images/profile_pic.jpeg"
						alt="Profile Picture"
						fill
						className="object-cover"
					/>
				</div>

				<div className="flex flex-1 flex-col gap-8 items-center md:items-start text-center md:text-left">
					<h1
						style={{ animation: "intro_0 1s forwards" }}
						className="text-4xl md:text-7xl glow-text font-bold"
					>
						Hello!
					</h1>
					<h1
						style={{ animation: "intro_1 2s forwards 3s" }}
						className="text-3xl md:text-5xl glow-text opacity-0"
					>
						I'm <b className="glow-text">Dhananjay Sharma</b>
					</h1>

					<div
						id="intro_3"
						className="text-xl md:text-2xl mt-4 flex flex-wrap justify-center md:justify-start gap-2 items-center glow-text"
					>
						<span className="frontend">Frontend</span>
						<span className="plus">+</span>
						<span className="backend">Backend</span>
						<span className="equals">=</span>
						<span className="fsd font-bold text-2xl">Full Stack Dev</span>
					</div>

					<div
						style={{ animation: "intro_1 2s forwards 3s" }}
						className="flex w-full gap-4 opacity-0 justify-around"
					>
						<a
							className="flex items-center gap-2"
							target="_blank"
							href="https://github.com/DJ5harma"
						>
							<img
								src="/logos/github.svg"
								alt=""
								className="w-10 bg-card rounded-full mr-1"
							/>
							<span className="hidden md:block">GitHub</span>
						</a>
						<a
							className="flex items-center gap-2"
							target="_blank"
							href="https://www.linkedin.com/in/dhananjay-sharma-016550254/"
						>
							<img src="/logos/linkedin.svg" alt="" className="w-10" />
							<span className="hidden md:block">LinkedIn</span>
						</a>
						<a
							className="flex items-center gap-2"
							target="_blank"
							href="https://leetcode.com/u/Dhananjay_Sharma_/"
						>
							<img src="/logos/leetcode.svg" alt="" className="w-10" />
							<span className="hidden md:block">Leetcode</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
