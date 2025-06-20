"use client";

import Image from "next/image";
import "./TopSeg.css";

export default function TopSeg() {
	return (
		<div className="w-full flex overflow-hidden">
			<div id="container" className="flex w-full flex-col gap-3 [&>*]:relative">
				<h1 id="intro_0" className="text-4xl md:text-7xl relative glow-text">
					Hello!
				</h1>
				<h1 id="intro_1" className="text-3xl md:text-6xl relative glow-text">
					I'm <b className="glow-text">Dhananjay Sharma</b>
				</h1>

				<div
					id="intro_3"
					className="text-xl md:text-2xl mt-4 flex flex-wrap gap-2 items-center glow-text"
				>
					<span className="frontend">Frontend</span>
					<span className="plus">+</span>
					<span className="backend">Backend</span>
					<span className="equals">=</span>
					<span className="fsd">Full Stack Dev</span>
				</div>
			</div>
			<div
				id="intro_2"
				className="w-[100px] h-[200px] md:w-[100px] md:h-[400px] relative overflow-hidden"
			>
				<Image
					src="/images/profile_pic.jpeg"
					fill
					alt="Profile Picture"
					style={{ objectFit: "cover" }}
				/>
			</div>
		</div>
	);
}
