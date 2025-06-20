import AboutCards from "@/components/AboutCards";
import TopSeg from "@/components/TopSeg";

export default function Home() {
	return (
		<div className="items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<TopSeg />
			<AboutCards />
		</div>
	);
}
