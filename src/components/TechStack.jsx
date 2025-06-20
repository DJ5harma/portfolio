"use client";

import { techList } from "@/data/techList";

export default function TechStack() {
	return (
		<section className="w-full flex flex-col items-center">
			<h2 className="text-4xl md:text-5xl font-bold mb-14 glow-text">
				🛠 Tech Stack
			</h2>

			<div className="w-full max-w-7xl px-6">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-10">
					{techList.map(({ name, description, logo, url }) => (
						<a
							key={logo}
							target="_blank"
							href={url}
							className="relative group cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:border-purple-500"
						>
							<div className="p-4 bg-gray-100 rounded-xl shadow-md transition-all duration-300 flex flex-col items-center min-h-[150px] group-hover:min-h-[220px]">
								<img
									src={logo}
									alt={name}
									className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-125 relative top-2"
								/>

								<div className="mt-4 text-center transition-all duration-300 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-40">
									<div className="text-base font-semibold text-black">
										{name}
									</div>
									<p className="text-sm mt-2 text-gray-700">{description}</p>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
