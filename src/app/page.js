import AboutCards from "@/components/AboutCards.jsx";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects.jsx";
import TechStack from "@/components/TechStack.jsx";
import TopSeg from "@/components/TopSeg.jsx";
import "@/styles/delay.css";

export default function Home() {
	return (
		<div className="justify-items-center min-h-screen p-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<TopSeg />
			<div className="w-full h-full flex flex-col mt-4 gap-16" style={{
				animation: "delay 6s"
			}}>
				<AboutCards />
				<TechStack />
				<Projects />
				<Achievements />
			</div>
		</div>
	);
}
