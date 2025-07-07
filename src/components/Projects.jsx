import { projects } from "@/data/projects";

export default function Projects() {
	return (
		<section className="w-full flex flex-col items-center">
			<h2 className="text-4xl md:text-5xl font-bold mb-12 glow-text">🚀 Best Projects</h2>

			<div className="w-full max-w-5xl px-6 space-y-10">
				{projects.map(({ github, name, period, summary, techStack }, index) => (
					<div
						key={index}
						className="bg-card/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border transition-all duration-300 hover:shadow-glow group"
					>
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
							<div className="flex items-center gap-2">
								<h3 className="text-2xl font-semibold text-foreground">{name}</h3>
								{github && (
									<a
										href={github}
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
										title="View on GitHub"
									>
										<img
											src={"/logos/github.svg"}
											alt={github}
											className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-125 bg-white rounded-full"
										/>
                                        <span>Repo</span>
									</a>
								)}
							</div>
							<span className="text-sm text-gray-300 mt-1 sm:mt-0">
								{period}
							</span>
						</div>

						<div className="flex flex-wrap mt-4 gap-2">
							{techStack.map((tech, i) => (
								<span
									key={i}
									className="text-xs font-medium bg-white/10 text-gray-200 px-2 py-1 rounded"
								>
									{tech}
								</span>
							))}
						</div>

						<ul className="list-disc list-inside mt-4 space-y-1 text-gray-100 text-sm sm:text-base">
							{summary.map((point, i) => (
								<li key={i}>{point}</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
