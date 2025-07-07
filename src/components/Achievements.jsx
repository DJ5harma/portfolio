import { achievements } from "@/data/achievements";

export default function Achievements() {
	return (
		<section className="w-full flex flex-col items-center">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 glow-text">
				🏆 Achievements
			</h2>

			<div className="w-full max-w-4xl px-6 grid sm:grid-cols-2 gap-8">
				{achievements.map(({ title }, i) => (
					<div
						key={i}
						className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:shadow-[0_0_25px_2px_rgba(255,255,255,0.25)] transition-all duration-300"
					>
						<h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
					</div>
				))}
			</div>
		</section>
	);
}
